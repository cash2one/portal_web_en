$(document).ready(function(){	

/***************************************************
	MENU
***************************************************/
	jQuery('ul.nav li.dropdown').hover(function (){
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
    }, function (){
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
    });

/***************************************************
		TOOLTIP & POPOVER
***************************************************/
$("[rel=tooltip]").tooltip();
$("[data-rel=tooltip]").tooltip();

/***************************************************
		CAROUSEL - STOP AUTO CYCLE
***************************************************/
 $('.carousel').carousel({
    interval: false});

/***************************************************
		HOVERS
***************************************************/
	$(".hover_img, .hover_colour").on('mouseover',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:0.1},500);
		}
	);
	$(".hover_img, .hover_colour").on('mouseout',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:1},800);
		}
	);
	
/***************************************************
		BACK TO TOP LINK
***************************************************/
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})
		});	

/***************************************************
	IFRAME
***************************************************/
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
	

/***************************************************
	ANIMATIONS
***************************************************/

$(function() { 	
$('.welcome').show().addClass("animated fadeInDown");
$('.welcome_index').show().addClass("animated fadeInDown");
$('.intro_sections h6').show().addClass("animated fadeInUp");
$('.fadeinup').show().addClass("animated fadeInUp");
$('.fadeindown').show().addClass("animated fadeInDown");
}); 

/***************************************************
		PRETTYPHOTO
***************************************************/
$('a[data-rel]').each(function() {
$(this).attr('rel', $(this).attr('data-rel')).removeAttr('data-rel');
});
$("a[rel^='prettyPhoto']").prettyPhoto();
	jQuery("a[rel^='prettyPhoto'], a[rel^='lightbox']").prettyPhoto({
overlay_gallery: false, social_tools: false,  deeplinking: false
});



		(function($){
			$(window).load(function(){
				$("body").mCustomScrollbar({
					theme:"minimal"
				});
			});
		})(jQuery);
	
	$function(){
		 $(".nav .item").click(function(){
                    alert(1)
                })
                function showList(){
                    var timer = null;
                    var aNav = $(".nav .item");
                    var listNav = $('.field-wrap');
                    var currentActive = aNav.filter('.activell').index();

                    aNav.each(function(index,elements){
                        $(elements).mouseenter(function(){
                           {# $(this).addClass("active").siblings().removeClass("active");
                            $(this).siblings().removeClass("activell");#}
                            $(".list-s0"+ (index+1) +"").stop(true,true).slideDown();
                            $(".list-s0"+ (index+1) +"").siblings(".field-wrap").stop(true,true).slideUp();
                        });

                        $(elements).mouseleave(function(){
                            listNav.eq(index).delay(700).slideUp();
                        })

                        listNav.eq(index).mouseenter(function(){
                            $(this).stop(true);
                        });

                        listNav.eq(index).mouseleave(function(){
                            $(this).slideUp();
                           {# aNav.removeClass("active");
                            aNav.eq(currentActive).addClass('active')#}
                        })
                    });
                }
                showList()
	}