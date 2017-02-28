$(document).ready(function () {

    $('.js-nav').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-navigation');
        }
        else {
            $('nav').removeClass('sticky-navigation');
        }
    });    
});