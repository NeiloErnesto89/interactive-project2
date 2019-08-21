queue()
    .defer(d3.json, "data/New_EU_28.json")
    .await(makeGraphs);


function makeGraphs(error, euData) { /*refering to line 4 index */


    var ndx = crossfilter(euData);
    
   /* var total_deaths_percent = reduceAvg(ndx, "DeathsTotal");*/
    
    // charts
    
    show_eu_population(ndx);
    
    show_eu_emission_total(ndx);
    
   /* show_total_deaths(ndx, total_deaths_percent);*/

    show_country_selector(ndx);

    show_eu_barchart(ndx);

    show_death_v_gdp_correlation(ndx);

    show_country_emission_pie(ndx);


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

	totalEmissNum
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
        .range(["Red", "#15EE68", "red", "Grey", "Brown", "Purple", "Orange", "Coffee", "Coral", "Emerald", "Gold", "Black", "Lemon", "Green", "Blue", "Violet", "#4B15EE", "Crimson", "Jade", "Indigo", "Lime", "Magenta", "Olive", "Pear", "Peach", "Plum", "Ruby", "Salmon"]);


    dc.barChart("#eu-pollution-chart")
        .width(500)
        .height(550)
        .margins({ top: 20, right: 40, bottom: 40, left: 40 })
        .dimension(country_dim)
        .group(total_emissions)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .colors(countryColors)
        .colorAccessor(function(d) {
            return d.key[0];
        })
        /*.xAxisLabel("Countries")*/
        .yAxisLabel("Co2 Emission Level (million tonnes)")
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
        .width(650)
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
            return "The average death rate due to air pollution is " + d.key[1] + " per 100,000 in " + d.key[2];
        })
        .colorAccessor(function(d) {
            return d.key[2];
        })
        .colors(nationColors)
        .dimension(deathCoDim)
        .group(gdpAndDeathGroup)
        .margins({ top: 10, right: 50, bottom: 75, left: 75 })
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
       /* .legend(dc.legend().x(270).y(0).itemHeight(8).gap(5));*/
}
