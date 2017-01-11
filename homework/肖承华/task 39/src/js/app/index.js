
define(['jquery','com/Gotop','com/exposure','com/waterfall','com/carousel','com/stickUp'], function($, GoTop,exposure,waterfall) {

	new GoTop('go-top');
	$('.timeline').find('li').each(function(){
		new exposure(this);
	})
	$('.carousel').carousel();
	$('.navbar').stickUp();
	waterfall();
});