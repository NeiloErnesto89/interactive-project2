queue()
    .defer(d3.json, "data/New_EU_28.json")
    .await(makeGraphs);


function makeGraphs(error, euData) {


    var ndx = crossfilter(euData);


    /* charts */

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
    
    show_row_chart(ndx); 



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


function show_country_selector(ndx) {
    dim = ndx.dimension(dc.pluck("Country"));
    group = dim.group()

    dc.selectMenu("#country-selector")
        .dimension(dim)
        .group(group)
        .title(function (d) {
            return d.key ;
        });
}

function show_eu_barchart(ndx) {
    var country_dim = ndx.dimension(dc.pluck("Country"));
    var total_emissions = country_dim.group().reduceSum(dc.pluck('EmissionsC'));

    var countryColors = d3.scale.ordinal()
        .domain(["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "UK"])
        .range(["#bf80ff", "Green", "Orange", "Yellow", "Brown", "Purple", "Orange", "Coffee", "Coral", "Yellow", "Gold", "OrangeRed", "Lemon", "FireBrick", "Blue", "Violet", "#4B15EE", "Crimson", "Jade", "Indigo", "Lime", "Magenta", "Olive", "Pear", "Peach", "yellow", "Ruby", "pink"]);


    dc.barChart("#eu-pollution-chart")
        .width(460)
        .height(550)
        .margins({ top: 20, right: 30, bottom: 50, left: 30 })
        .dimension(country_dim)
        .group(total_emissions)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .colors(countryColors)
        .colorAccessor(function(d) {
            return d.value;
        })
        .title(function (d) {
            return d.key + " produces " + d.value.toFixed(2) + " million tonnes of Co2 per annum, which is " + (d.value/365).toFixed(2) + " million tonnes of Co2 per day" ;
        })
        .xAxisLabel("Countries")
        .yAxisLabel("Co2 Emission Level (million tonnes)")
        .yAxis().ticks(7);


}


function show_country_emission_pie(ndx) {
    var area_dim = ndx.dimension(dc.pluck('Country'));
    var total_emissions_pie = area_dim.group().reduceSum(dc.pluck('EmissionsC'));

    dc.pieChart("#country-pie-chart")
        .width(420)
        .height(500)
        .innerRadius(55)
        .externalRadiusPadding(55)
        .transitionDuration(1500)
        .dimension(area_dim)
        .group(total_emissions_pie)
        .externalLabels(21)
        .drawPaths(true)
        .minAngleForLabel(0)
        .cap(5)
        .title(function (d) {
            return d.key + " produces " + d.value.toFixed(2) + " million tonnes of Co2 per annum, which is " + (d.value/365).toFixed(2) + " million tonnes of Co2 per day" ;
        })
        .legend(
            dc
            .legend()
            .x(363)
            .y(20)
            .horizontal(false)
            .itemHeight(5)
            .gap(5)
        )
        .on('pretransition', function(chart) {
                chart.selectAll('text.pie-slice').text(function(d) {
                    return d.data.key + ' ' + dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2*Math.PI) * 100) + '%';
                })
            });
        
   
}

function show_eu_per_cap_barchart(ndx) {
    var nation_dim = ndx.dimension(dc.pluck("Country"));
    var total_emissions_per = nation_dim.group().reduceSum(dc.pluck('EmissionsPerCap'));

    var nationColors = d3.scale.ordinal()
        .domain(["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "UK"])
        .range(["red", "pink", "blue", "green", "Brown", "Purple", "Orange", "yellow", "Coral", "Emerald", "Gold", "Black", "Lemon", "Green", "Blue", "Violet", "#4B15EE", "Crimson", "Jade", "Indigo", "Lime", "Magenta", "Olive", "Pear", "Peach", "Plum", "Ruby", "#E74C3C"]);


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
            return d.value;
        })
        .title(function (d) {
            return d.key + "'s citizens individually produce " + d.value.toFixed(2) + " tonnes of Co2 per annum, which is " + (d.value/365).toFixed(2) + " tonnes of Co2 per day" ;
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
            return "The average death rate due to air pollution is " + d.key[1] + " per 100,000 in " + d.key[2] + "; where the GDP is €" + d.key[0]  ;
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
        .title(function (d) {
            return d.key + "'s citizens individually produce " + d.value.toFixed(2) + " kgs of plastic waste per annum, which is " + (d.value/365).toFixed(2) + " kgs per day" ;
        })
        .cap(9)
        .legend(
            dc
            .legend()
            .x(382)
            .y(15)
            .horizontal(false)
            .itemHeight(5)
            .gap(5)
        );
}

function show_plastic_waste_dim(ndx) {

    var plastic_dimension = ndx.dimension(function(d) {
        if (d.PlasticWasteYearly > 50)
            return "+ 50kgs per capita =  ";
        else
            return "- 50kgs per captia =  "
    });

    var plastic_group = plastic_dimension.group();
    
    


    dc.pieChart('#yearly-plastic-dim')
        .height(380)
        .width(350)
        .radius(110)
        .dimension(plastic_dimension)
        .group(plastic_group)
        .title(function(d) {
            return "The EU nations who produce more or less than 50kgs yearly per capita" ;
        })
        .on('pretransition', function(chart) {
                chart.selectAll('text.pie-slice').text(function(d) {
                    return d.data.key + ' ' + dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2*Math.PI) * 100) + '%';
                })
            });

}


function show_row_chart(ndx) {


    var area_dim = ndx.dimension(dc.pluck('Country'));
    var yearly_plastic_pie = area_dim.group().reduceSum(dc.pluck('PlasticWasteYearly'));


    dc.rowChart("#row-chart")
        .width(450)
        .height(450)
        .margins({top: 5, left: 10, right: 10, bottom: 20})
        .x(d3.scale.ordinal())
        .elasticX(true)
        .title(function (d) {
            return d.key + "'s citizens individually produce " + d.value + " kgs of plastic waste per annum, which is " + (d.value/365).toFixed(2) + " kgs per day" ;
        })
        .dimension(area_dim)
        .group(yearly_plastic_pie);
        
}
    
    

