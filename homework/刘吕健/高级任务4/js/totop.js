define([],function(){
	function ToTop($target){
		var html = '<button class="totop">回到顶部</button>';
		var $btn = $(html);
		$target.append($btn);
		$($btn).css('float','right');
		$btn.css('visibility','hidden');
		$btn.on('click',function(){
			$('body').animate({scrollTop: 0},500);
		});
		$(window).scroll(function(){
			if($(this).scrollTop() + $(this).height() > $btn.offset().top){
				$btn.css('visibility','visible');
			}	
		});
	}
	return function($target){
		new ToTop($target);
	}
})