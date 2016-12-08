function scrollTo(div) {
    if ($(div)) {
        $('html, body').stop().animate({
            scrollTop: $(div).offset().top
        }, 1000, 'easeInOutSine', function () {

        });
    }
}
function formatPrice(num) {
    var p = num.split(".");
    return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return  num + (i && !(i % 3) ? "," : "") + acc;
    }, "");
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

    var $myGroup = $('.list-agency');
    $myGroup.on('show.bs.collapse','.collapse', function() {
        $myGroup.find('.collapse.in').collapse('hide');
    });

    $('.flexymenuli').each(function() {
        $(this).mouseover(function() {
            $(this).find('.flexy-menu-box').css('display', 'block');
        });
        $(this).mouseout(function() {
            $(this).find('.flexy-menu-box').css('display', 'none');
        });
    });

    $("#flex-menu-btn").mouseover(function() {
      	$(".hidden-version.flexy-menu").css('display', 'block');
    });
  	$("#flex-menu-btn").mouseout(function() {
      	$(".hidden-version.flexy-menu").css('display', 'none');
    });
  
    responsive();
    $(".format-price").each(function(){
      var n = $(this).html();      
      $(this).html(formatPrice(n));
    });
  	
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
