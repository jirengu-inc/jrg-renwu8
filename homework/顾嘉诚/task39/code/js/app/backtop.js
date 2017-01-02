define(['jquery'],function($){
	var back = (function(){
		var $backTop = $('<div id="back-top">回到顶部</div>');
		$('body').append($backTop);

		function init(){
			$(window).on('scroll',function(){
				if($(this).scrollTop() > 1000){
					$backTop.show();
				}else{
					$backTop.hide();
				}
			});
			$backTop.on('click',function(){
				$(window).scrollTop(0);
			});
		}

		return {
			init: init
		};
	})();
	return back
});