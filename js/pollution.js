queue()
    .defer(d3.json, "data/EU_Data_Sim.json")
    .await(makeGraphs);

function makeGraphs(error, pollutionData) {
    var ndx = crossfilter(pollutionData);

    show_region_emission_chart(ndx);

    show_region_emission_pie(ndx);

    show_region_selector(ndx);

    show_eu_barchart(ndx);

    show_average_death_rate(ndx);
    
    show_death_v_gdp_correlation(ndx);

 /*   show_country_death_toll(ndx); */

    dc.renderAll();

}

function show_region_selector(ndx) {
    dim = ndx.dimension(dc.pluck("Region"));
    group = dim.group()

    dc.selectMenu("#region-selector")
        .dimension(dim)
        .group(group);
}


function show_region_emission_chart(ndx) {
    var region_dim = ndx.dimension(dc.pluck("Region"));
    var total_emissions = region_dim.group().reduceSum(dc.pluck('EmissionsR'));


    dc.barChart("#pollution-chart")
        .width(600)
        .height(400)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(region_dim)
        .group(total_emissions)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Countries")
        .yAxisLabel("Co2 Emission Level (billion tonnes)")
        .yAxis().ticks(8);

}



function show_region_emission_pie(ndx) {
    var area_dim = ndx.dimension(dc.pluck('Region'));
    var total_emissions_pie = area_dim.group().reduceSum(dc.pluck('EmissionsR'));

    dc.pieChart("#region-pie-chart")
        .height(500)
        .radius(150)
        .transitionDuration(1500)
        .dimension(area_dim)
        .group(total_emissions_pie);
}

function show_eu_barchart(ndx) {
    var region_dim = ndx.dimension(dc.pluck("Country"));
    var total_emissions = region_dim.group().reduceSum(dc.pluck('EmissionsC'));


    dc.barChart("#eu-pollution-chart")
        .width(900)
        .height(850)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(region_dim)
        .group(total_emissions)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        /*.xAxisLabel("Countries")*/
        .yAxisLabel("Co2 Emission Level (million tonnes)")
        .yAxis().ticks(7);

}


function show_average_death_rate(ndx) {
    var dim = ndx.dimension(dc.pluck("Country"));

    function add_item(p, v) {
        p.count++;
        p.total += v.deaths
        p.average = p.total / p.count;
        return p;
    }

    function remove_item(p, v) {
        p.count--;
        if (p.count == 0) {
            p.total = 0;
            p.average = 0;
        }
        else {
            p.total -= v.deaths;
            p.average = p.total / p.count;
        }
        return p;
    }

    function intialise() {
        return { count: 0, total: 0, average: 0 };
    }


    var averageDeathRate = dim.group().reduce(add_item, remove_item, intialise);

    dc.barChart("#average_death_rate")
        .width(600)
        .height(400)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(averageDeathRate)
        .valueAccessor(function(d){
            return d.value.average;
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Countries")
        .yAxisLabel("Death")
        .yAxis().ticks(8);
}

/* scatter plot ideal for correlation between 2 different data items
e.g. death v gdp */



function show_death_v_gdp_correlation(ndx) {
    
    var nationColors = d3.scale.ordinal()
        .domain(["Austria", "Belgium", "Bulgaria" ,"Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia" , "Lithuania","Luxembourg","Malta", "Netherlands","Poland","Portugal", "Romania","Slovakia", "Slovenia",  "Spain", "Sweden", "United Kingdom"])
        .range(["Red", "Yellow", "Pink" ,"Grey", "Brown", "Purple", "Orange", "Coffee", "Coral", "Emerald", "Gold", "Black", "Lemon", "Green", "Blue", "Violet" , "Cyan", "Crimson","Jade", "Indigo","Lime", "Magenta", "Olive","Pear", "Peach",  "Plum", "Ruby", "Salmon"]);
    
    var gdpDim = ndx.dimension(dc.pluck("GDP")) /* on x axis*/
    var deathCoDim = ndx.dimension(function (d) {
        return [d.GDP, d.Deaths, d.Country] /*first part on x axis*/
    });
    var gdpAndDeathGroup = deathCoDim.group();
    
    var minGdpDeathRate = gdpDim.bottom(1)[0].GDP;
    var maxGdpDeathRate = gdpDim.top(1)[0].GDP;
    
    
    dc.scatterPlot("#death-v-gdp-plot")
        .width(600)
        .height(400)
        .x(d3.scale.linear().domain([minGdpDeathRate, maxGdpDeathRate])) /* as gdp is numerical i.e. 10 is more than 9 */
        .brushOn(false)
        .symbolSize(6)
        .clipPadding(10)
        .xAxisLabel("GDP")
        .yAxisLabel("Deaths")
        .title(function(d) {
            return "The average death rate due to air pollution is " + d.key[1] + " in " + d.key[2];
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

/*

function show_country_death_toll(ndx) {
    var timeDim = ndx.dimension(dc.pluck("Deaths"));
    var countryDim = ndx.dimension(function(d) {
        return [d.Country, d.Deaths, d.Year];
    });
    var deathGroup = countryDim.group();

    var minTime = timeDim.bottom(1)[0].Deaths;
    var maxTime = timeDim.top(1)[0].Deaths;

    dc.scatterPlot("#death-plot")
        .width(550)
        .height(400)
        .x(d3.scale.linear().domain([minTime, maxTime]))
        .brushOn(false)
        .symbolSize(6)
        .clipPadding(10)
        .xAxisLabel("Deaths (rounded off to highest decimal point)")
        .title(function(d) {
            return "this is" + d.key[0];
        })
        .dimension(countryDim)
        .group(deathGroup)
        .margins({ top: 10, right: 50, bottom: 75, left: 75 })
        .xAxis().ticks(3);

}

*/





/*
    
function makeGraphs(error, euData) { 
    var ndx = crossfilter(euData);
    
    pollutionData.forEach(function(d) {
        d.Emissions = parseInt(d.Emissions);
        d.Year = parseInt(d.Year);
    })
    
    //show_country_pollution(ndx);
    
    show_region_co2_emissions(ndx);
    
    dc.renderAll();
    
}*/



/*function show_country_pollution(ndx) {
    var dim = ndx.dimension(dc.pluck("Entity"));
    var group = dim.group();
    
    dc.barChart("pollution-graph")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Countries")
        .yAxis().ticks(20); 
}*/


/*function show_correlation_between_rating_and_viewership(ndx) {

    var IMDBViewDim = ndx.dimension(function (d) {
        return [d.viewers, d.rating, d.episode, d.season];
    });


    var IMDBViewGroup = IMDBViewDim.group();

    var seasonColors = d3.scale.ordinal()
        .domain(["1", "2", "3", "4", "5", "6", "7", "8"])
        .range(['#6E403A ', '#175ac6', '#E57687', '#DACC3E', '#7FB7BE', '#545a2c', '#020202', '#705D56']);

    dc.scatterPlot("#corrIMDBandViews")
        .dimension(IMDBViewDim)
        .group(IMDBViewGroup)
        .width(700)
        .height(400)
        .colorAccessor(function (d) {
            return d.key[3];
        })

        .colors(seasonColors)
        .y(d3.scale.linear()
            .domain([0, 10]))

        .x(d3.scale.linear()
            .domain([1, 14]))
        .brushOn(false)
        .symbolSize(8)
        .xAxisLabel("Viewers (in million)")
        .yAxisLabel("IMDB Rating")
        .title(function (d) {
            return d.key[2] + " was rated a " + d.key[1] + " and had a viewership of " + d.key[0] + " million.";
        })
        .clipPadding(5);

} */