queue()
    .defer(d3.json, "data/New_EU_28.json")
    .await(makeGraphs);


function makeGraphs(error, euData) {


    var ndx = crossfilter(euData);


    // charts

    show_eu_population(ndx);

    show_eu_emission_total(ndx);

    show_country_selector(ndx);

    show_eu_barchart(ndx);

    show_death_v_gdp_correlation(ndx);

    show_country_emission_pie(ndx);

    show_yearly_plastic_waste_pie(ndx);

    show_plastic_waste_dim(ndx);

    show_waste_gdp_line(ndx);

    show_eu_per_cap_barchart(ndx);

    /*  show_responsive_barchart(ndx); */


    dc.renderAll();

}



function show_eu_population(ndx) {
    var populationGroup = ndx.groupAll().reduceSum(function(d) {
        return d.Population;
    });
    var populationNum = dc.numberDisplay("#eu-population");

    populationNum
        .group(populationGroup)
        .valueAccessor(function(d) {
            return d;
        });
}

function show_eu_emission_total(ndx) {
    var emissionGroup = ndx.groupAll().reduceSum(function(d) {
        return d.EmissionsC;
    });
    var totalEmissNum = dc.numberDisplay("#eu-total_emission");
    var numFormat = d3.format(",.2r");

    totalEmissNum
        .formatNumber(numFormat)
        .group(emissionGroup)
        .valueAccessor(function(d) {
            return d;
        });
}

/*
// ==== % population born abroad number display 
function show_total_deaths(ndx, total_deaths_percent) {

	var total_deaths = dc.numberDisplay("#total-deaths");

	total_deaths
		.formatNumber(d3.format(".0%")) // format number as percentage
		.group(total_deaths) // group brought in from makeCharts()
		.valueAccessor(function(d) {
			return d.average / 100; // divide by 100 to allow % number format
		});
} */



function show_country_selector(ndx) {
    dim = ndx.dimension(dc.pluck("Country"));
    group = dim.group()

    dc.selectMenu("#country-selector")
        .dimension(dim)
        .group(group);
}

function show_eu_barchart(ndx) {
    var country_dim = ndx.dimension(dc.pluck("Country"));
    var total_emissions = country_dim.group().reduceSum(dc.pluck('EmissionsC'));

    var countryColors = d3.scale.ordinal()
        .domain(["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "United Kingdom"])
        .range(["Pink", "Green", "Orange", "Yellow", "Brown", "Purple", "Orange", "Coffee", "Coral", "Emerald", "Gold", "OrangeRed", "Lemon", "FireBrick", "Blue", "Violet", "#4B15EE", "Crimson", "Jade", "Indigo", "Lime", "Magenta", "Olive", "Pear", "Peach", "Plum", "Ruby", "Salmon"]);


    dc.barChart("#eu-pollution-chart")
        .width(500)
        .height(550)
        .margins({ top: 20, right: 40, bottom: 50, left: 40 })
        .dimension(country_dim)
        .group(total_emissions)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .colors(countryColors)
        .colorAccessor(function(d) {
            return d.key[0];
        })
        .xAxisLabel("Countries")
        .yAxisLabel("Co2 Emission Level (million tonnes)")
        .yAxis().ticks(7);


}



function show_eu_per_cap_barchart(ndx) {
    var nation_dim = ndx.dimension(dc.pluck("Country"));
    var total_emissions_per = nation_dim.group().reduceSum(dc.pluck('EmissionsPerCap'));

    var nationColors = d3.scale.ordinal()
        .domain(["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "United Kingdom"])
        .range(["red", "pink", "blue", "green", "Brown", "Purple", "Orange", "yellow", "Coral", "Emerald", "Gold", "Black", "Lemon", "Green", "Blue", "Violet", "#4B15EE", "Crimson", "Jade", "Indigo", "Lime", "Magenta", "Olive", "Pear", "Peach", "Plum", "Ruby", "Salmon"]);


    dc.barChart("#eu-per_cap-chart")
        .width(500)
        .height(450)
        .margins({ top: 20, right: 30, bottom: 50, left: 30 })
        .dimension(nation_dim)
        .group(total_emissions_per)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .colors(nationColors)
        .colorAccessor(function(d) {
            return d.key[0];
        })
        .xAxisLabel("Countries")
        .yAxisLabel("Per Capita Co2 Emissions (tonnes)")
        .yAxis().ticks(7);


}




function show_death_v_gdp_correlation(ndx) {

    var nationColors = d3.scale.ordinal()
        .domain(["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "United Kingdom"])
        .range(["Red", "Yellow", "Pink", "Grey", "Brown", "Purple", "Orange", "Coffee", "Coral", "Emerald", "Gold", "Black", "Lemon", "Green", "Blue", "Violet", "Cyan", "Crimson", "Jade", "Indigo", "Lime", "Magenta", "Olive", "Pear", "Peach", "Plum", "Ruby", "Salmon"]);

    var gdpDim = ndx.dimension(dc.pluck("GDP")) /* on x axis*/
    var deathCoDim = ndx.dimension(function(d) {
        return [d.GDP, d.DeathsPer, d.Country] /*first part on x axis*/
    });
    var gdpAndDeathGroup = deathCoDim.group();

    var minGdpDeathRate = gdpDim.bottom(1)[0].GDP;
    var maxGdpDeathRate = gdpDim.top(1)[0].GDP;


    dc.scatterPlot("#death-v-gdp-plot")
        .width(600)
        .height(400)
        /* height(window.innerHeight - 300)
         .width(window.innerWidth - 65 % window)*/
        .x(d3.scale.linear().domain([minGdpDeathRate, maxGdpDeathRate])) /* as gdp is numerical i.e. 10 is more than 9 */
        .brushOn(false)
        .symbolSize(6)
        .clipPadding(10)
        .xAxisLabel("GDP (€)")
        .yAxisLabel("Deaths")
        .title(function(d) {
            return "The average death rate due to air pollution is " + d.key[1] + " per 100,000 in " + d.key[2] + "; where the GDP is " + d.key[0] + " (€)" ;
        })
        .colorAccessor(function(d) {
            return d.key[2];
        })
        .colors(nationColors)
        .dimension(deathCoDim)
        .group(gdpAndDeathGroup)
        .margins({ top: 10, right: 50, bottom: 50, left: 50 })
        .xAxis().ticks(5);


}


function show_country_emission_pie(ndx) {
    var area_dim = ndx.dimension(dc.pluck('Country'));
    var total_emissions_pie = area_dim.group().reduceSum(dc.pluck('EmissionsC'));

    dc.pieChart("#country-pie-chart")
        .width(450)
        .height(500)
        .innerRadius(50)
        .externalRadiusPadding(45)
        .transitionDuration(1500)
        .dimension(area_dim)
        .group(total_emissions_pie)
        .externalLabels(20)
        .drawPaths(true)
        .minAngleForLabel(0)
        .cap(5)
        .legend(
            dc
            .legend()
            .x(395)
            .y(20)
            .horizontal(false)
            .itemHeight(5)
            .gap(5)
        );
   
}







function show_waste_gdp_line(ndx) {


    var gdp_dim = ndx.dimension(dc.pluck('GDP'));
    var total_plastic_v_gdp = gdp_dim.group().reduceSum(dc.pluck('PlasticWasteYearly'));
    var minPlasticGDP = gdp_dim.bottom(1)[0].GDP;
    var maxPlasticGDP = gdp_dim.top(1)[0].GDP;

    dc.lineChart("#waste-gdp-line")
        .width(600)
        .height(400)
        .margins({ top: 10, right: 50, bottom: 40, left: 50 })
        .dimension(gdp_dim)
        .group(total_plastic_v_gdp)
        .transitionDuration(500)
        .x(d3.scale.linear().domain([minPlasticGDP, maxPlasticGDP]))
        .elasticY(false)
        .elasticX(false)
        .xAxisLabel("GDP  (€)")
        .yAxisLabel("Yearly Plastic Generation per Capita (kg)")
        .yAxis().ticks(5);
}

function show_yearly_plastic_waste_pie(ndx) {
    var area_dim = ndx.dimension(dc.pluck('Country'));
    var yearly_plastic_pie = area_dim.group().reduceSum(dc.pluck('PlasticWasteYearly'));
    /*var numFormat = d3.format(".0%");*/




    dc.pieChart("#yearly-plastic-pie")
        .width(435)
        .height(500)
        /*  .formatNumber(pieNumFormat) */
        .innerRadius(40)
        .externalRadiusPadding(45)
        .transitionDuration(1500)
        .dimension(area_dim)
        .group(yearly_plastic_pie)
        .externalLabels(25)
        .drawPaths(true)
        .minAngleForLabel(0)
        .cap(9)
        .legend(
            dc
            .legend()
            .x(375)
            .y(15)
            .horizontal(false)
            .itemHeight(5)
            .gap(5)
        );
}

function show_plastic_waste_dim(ndx) {

    var plastic_dimension = ndx.dimension(function(d) {
        if (d.PlasticWasteYearly > 50)
            return "+ 50kgs per person";
        else
            return "- 50kgs per person"
    });

    var plastic_group = plastic_dimension.group();


    dc.pieChart('#yearly-plastic-dim')
        .height(380)
        .width(350)
        /*.useViewBoxResizing(true)*/
        .radius(110)
        .dimension(plastic_dimension)
        .group(plastic_group);

}

/*
function show_row_chart(ndx) {
    
}

/*

function show_responsive_barchart(ndx) {
    
    var area_dim = ndx.dimension(dc.pluck('Country'));
    var yearly_plastic_pie = area_dim.group().reduceSum(dc.pluck('PlasticWasteYearly'));


    var width = document.getElementById("resize").offsetWidth;

    barChart = dc.barChart("#response-bar");

    barChart
        .width(width)
        .height(350)
        .margins({ top: 10, right: 40, bottom: 30, left: 40 })
        .dimension(area_dim)
        .group(yearly_plastic_pie)
        .elasticY(true)
        .gap(1)
        .x(d3.scale.ordinal().domain([0, 5]))
        .xUnits(dc.units.ordinal)
        .yAxisLabel("Country")
        .xAxisLabel("Waste")
        .renderHorizontalGridLines(true)
        .transitionDuration(700);

    window.onresize = function(event) {
        var newWidth = document.getElementById("resize").offsetWidth;

        barChart.width(newWidth / 2)
            .transitionDuration(0);


        barChart.transitionDuration(750);
    };
    }
*/
