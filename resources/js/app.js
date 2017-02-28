$(document).ready(function () {

    $('.js-nav').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-navigation animated fadeInDownBig');
        }
        else {
            $('nav').removeClass('sticky-navigation animated fadeInDownBig');
        }
    });    
});