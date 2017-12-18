'use strict';

// ready
$(document).ready(function () {

    var body = $('body');

    // $("body").smoothWheel();

    // mask phone {maskedinput}
    //$("[name=phone]").mask("+7 (999) 999-9999");
    // mask phone

    // animation
    $('.animated').appear(function () {
        var elem = $(this);
        var animation = elem.data('animation');

        if (!elem.hasClass('visible')) {
            var animationDelay = elem.data('animation-delay');
            if (animationDelay) {
                setTimeout(function () {
                    elem.addClass(animation + " visible");
                }, animationDelay);
            } else {
                elem.addClass(animation + " visible");
            }
        }
    });
    // animation

    // floating labels
    var handleInput = function handleInput(el) {
        if (el.val() != "") {
            el.addClass('has-value');
        } else {
            el.removeClass('has-value');
        }
    };
    body.on('keydown', '.control', function (e) {
        handleInput($(this));
    });
    body.on('blur', '.control', function (e) {
        handleInput($(this));
    });
    // floating labels

    $('.nav__toggle--js').click(function () {
        $('.page-header').toggleClass('active');
        $(this).toggleClass('active');
        $(this).next().slideToggle();
        if ($(this).hasClass('active')) {
            $(this).html('закрыть');
        } else {
            $(this).html('меню');
        }
    });

    // select {select2}
    $('select').select2({
        minimumResultsForSearch: Infinity
    });
    // select

    //submit form
    $('.submit').click(function () {
        $(this).parent().next().addClass('active');
        return false;
    });
    $('.back--js').click(function () {
        $('.sent-form').removeClass('active');
        $('.control').removeClass('has-value');
        $('form').trigger('reset');
        return false;
    });
    //submit form

    // popup {magnific-popup}
    $('.popup').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        showCloseBtn: false,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
    $(document).on('click', '.popup-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });
    // popup
});
// ready

//parallax
$(window).bind('scroll', function (e) {
    var scrolled = $(window).scrollTop();
    $('.cr-bgimg div span').css('top', scrolled * .25 + 'px');
    $('.banner-img').css('top', scrolled * .25 + 'px');
});
//parallax

function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(59.91916157, 30.3251195),
        zoom: 14,
        mapTypeControl: false,
        zoomControl: false,
        scrollwheel: false,
        styles: [{
            "featureType": "administrative.locality",
            "elementType": "all",
            "stylers": [{
                "hue": "#2c2e33"
            }, {
                "saturation": 7
            }, {
                "lightness": 19
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "hue": "#ffffff"
            }, {
                "saturation": -100
            }, {
                "lightness": 100
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "hue": "#ffffff"
            }, {
                "saturation": -100
            }, {
                "lightness": 100
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#bbc0c4"
            }, {
                "saturation": -93
            }, {
                "lightness": 31
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "hue": "#bbc0c4"
            }, {
                "saturation": -93
            }, {
                "lightness": 31
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [{
                "hue": "#bbc0c4"
            }, {
                "saturation": -93
            }, {
                "lightness": -2
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#e9ebed"
            }, {
                "saturation": -90
            }, {
                "lightness": -8
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "hue": "#e9ebed"
            }, {
                "saturation": 10
            }, {
                "lightness": 69
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "hue": "#e9ebed"
            }, {
                "saturation": -78
            }, {
                "lightness": 67
            }, {
                "visibility": "simplified"
            }]
        }]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.91916157, 30.3251195),
        map: map,
        icon: "images/icons/bubble.svg"
    });
}
//# sourceMappingURL=main.js.map
