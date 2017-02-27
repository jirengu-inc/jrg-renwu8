requirejs.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'lib/jquery',
		'waterfall': 'app/waterfall'
	}
});

requirejs(['jquery','app/stickup','app/carousel','app/backtop','waterfall','app/lazyload','app/loadmore'],function($,stickUp,carousel,backTop,waterFall,lazyLoad,loadMore){
	
	new carousel($('.carousel'));
	
	$('.nav').stick();

	backTop.init();

	waterFall.realize($('.item'));

	var opts = {
				"url": "./js/loadmore.php",
				"type": "GET",
				"dataType": "JSON",
				"data": {
					"start": '0',
					"len": 3
				},
				"cache": "true",
				"success": function(para){loadMore.dealWith(para)},
				"error": function(){loadMore.Errors()}
			};
	loadMore.event($('.loadmore'),opts);
	for(var i = 0;i < 3;i ++){
		opts.data.start ++;
		if(opts.data.start === 6){
			opts.data.start = 0;
		}
	}
	lazyLoad.doInit($('#about').find('ul'));
});