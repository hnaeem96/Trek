$(document).ready(function () {

    $('.js-nav').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-navigation animated fadeInDownBig');
        }
        else {
            $('nav').removeClass('sticky-navigation animated fadeInDownBig');
        }
    });
    
    $('.flight-btn').click(function () {
        $('html, body').animate({
            scrollTop: $('.deals-section').offset().top
        }, 1000);
    });
    
    $('.more-info-btn').click(function () {
        $('html, body').animate({
            scrollTop: $('.about-section').offset().top
        }, 1000);
    });
});