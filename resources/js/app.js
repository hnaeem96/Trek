$(document).ready(function () {

    $('.travel-text-box').waypoint(function (direction) {
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
    
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                return false;
                }
            }
        });
    });
    
    $('.mobile-nav-icon').click(function () {
        var nav = $('.navigation');
        var navIcon = $('.mobile-nav-icon i');
        
        if ((nav).is(":hidden")) {
            navIcon.addClass('ion-close-round');
            navIcon.removeClass('ion-navicon-round');
            nav.slideDown(250);
        }
        else if ((nav).is(":visible") && navIcon.hasClass('ion-navicon-round')) {
                 nav.slideUp(250);
        }
        
        else {
            navIcon.addClass('ion-navicon-round');
            navIcon.removeClass('ion-close-round');
            nav.slideUp(250);
        }
    });
});