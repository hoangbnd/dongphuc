function scrollTo(div) {
    if ($(div)) {
        $('html, body').stop().animate({
            scrollTop: $(div).offset().top
        }, 1000, 'easeInOutSine', function () {

        });
    }
}

function responsive() {

}

$(document).ready(function () {

    /*========== mmenu ==========*/
   // var $menu = $('nav#mmenu');
   // $menu.mmenu({
   //     dragOpen: true,
   //     navbar: {
   //         title: "La Vuelta"
   //     }
   // });
   //var $menuApi = $("#mmenu").data("mmenu");
   // $('#mmenu .mm-listview>li a').click(function(e) {
   //     $menuApi.close();
   // });

    responsive();
});

$(window).load(function () {
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
        navText: ['◄', '►'],
        nav:true,
        dots: true,
        loop: true,
        autoHeight:true
    });
});

$(window).resize(function () {
    responsive();
});
