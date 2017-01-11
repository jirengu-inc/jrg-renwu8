define(['jquery'],function($){
	var lazyLoad = (function(){
		var winH = $(window).height();

		function doInit($node){
			$node.fadeOut();
			$(window).on('scroll',function(){
				var clock;
				clearTimeout(clock);
				clock = setTimeout(function(){
					checkShow($node);
				},3000);
			});
		}

		function checkShow($node){
			var offsetTop = $node.offset().top;
			var scrollTop = $(window).scrollTop();
			if(offsetTop < (winH + scrollTop)){
				isShow($node);
			}
		}
		function isShow($node){
			if(!!$node.hasClass('loaded')){
				return	;
			}else{
				$node.fadeIn();
				$node.addClass('loaded');
			}
		}

		return {
			doInit: doInit
		};
	})();
	return lazyLoad
});