$(document).ready(function() {
    $('.slider').bxSlider({
        // controls:  false,
        nextText: '<i class="fa fa-arrow-circle-right fa-1x"></i>',
        prevText: '<i class="fa fa-arrow-circle-left fa-1x"></i>'
    });
    $('#main_menu').meanmenu({
        meanMenuContainer: '#mobile_menu',
        meanScreenWidth: 768
    });
});