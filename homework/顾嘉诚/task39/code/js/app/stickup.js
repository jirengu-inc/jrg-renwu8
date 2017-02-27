define(['jquery'],function($){
	return $.fn.stick = function(){
			var $cur = this;
			var curW = $cur.width(),
				offsetTop = $cur.offset().top,
				offsetLeft = $cur.offset().left;
			
			$div = $cur.clone()
						.css('opacity',0)
						.insertBefore($cur)
						.hide();

			$(window).on('scroll',function(){
				var scrollTop = $(window).scrollTop();
				if(scrollTop > 200){
					$cur.addClass('black');
				}else{
					$cur.removeClass('black');
				}
				if(scrollTop >= offsetTop){
					if(!isFixed()){
						setFixed();
					}
				}else{
					if(isFixed()){
						unsetFixed();
					}
				}
			});

			function isFixed(){
				return !!$cur.data('fixed');
			}
			function setFixed(){
				$cur.data('fixed',true)
					.css({
						'position': 'fixed',
						'top': 0,
						'left': offsetLeft,
						'width': curW,
						'margin': 0,
					});
				$div.show();
			}
			function unsetFixed(){
				$cur.removeAttr('style')
					.data('fixed',false);
				$div.hide();
			}
		};
});
