function scrollTo(div) {
    if ($(div)) {
        $('html, body').stop().animate({
            scrollTop: $(div).offset().top
        }, 1000, 'easeInOutSine', function () {

        });
    }
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function responsive() {

}

$(document).ready(function () {
   RefreshCart();
    $('#mmenu').mmenu({
      blockUI: true,
      dragOpen: true,
    });

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
  
    $(".list-search li").click(function(){
      var thisQStr = $(this).find("a").attr("data-href");
      var parentQStr = $(this).parent().attr("id");
      var queryStr = window.location.search;
      var parentVal = getParameterByName(parentQStr, queryStr);
      if (parentVal) {
        if(parentVal == thisQStr){
        	queryStr = queryStr.replace('&'+parentQStr+'='+thisQStr, "").replace('?'+parentQStr+'='+thisQStr, "");
        }else{
        	queryStr = queryStr.replace(parentVal, thisQStr);
        }
      } else {
        queryStr += "&" + parentQStr + "=" + thisQStr;
      }
      if(queryStr.indexOf('?') < 0){
      	queryStr = queryStr.replace("&", "?");
      }
      location.href = window.location.pathname + queryStr;
    });
  
  	$(".list-search li").each(function(){
      	var thisQStr = $(this).find("a").attr("data-href");
        var parentQStr = $(this).parent().attr("id");
        var queryStr = window.location.search;
        var parentVal = getParameterByName(parentQStr, queryStr);
    	if (parentVal == thisQStr) {
         $(this).find("a").addClass("active");
      	}
    });
});

$(window).load(function () {
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
        navText: ['◄', '►'],
        nav: true,
        dots: true,
        loop: true,
        autoHeight:true
    });
  
  	$('#slider-product-detail').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1
    });
  
});

$(window).resize(function () {
    responsive();
});
