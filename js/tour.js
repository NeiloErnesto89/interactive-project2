$(".tour").on("click", function startTour(){
    
    $("#reset-button").css({right:"2rem", top: ".2rem"});
    
    var tour = tourGuide();
    tour.setOptions({
        steps: [
            {
            element: '#country-selector',
            tour: 'Click here to chose the country',
            position: 'auto'
            }
        ]
    });
    