define(['jquery','waterfall'],function($,waterFall){
	var loadMore = (function(){
		function event($ele,opts){
				$ele.on('click',function(){
				
				$.ajax(opts);
				
			});
		}

		function dealWith(para){
			for(var i = 0;i < para.length;i ++){
				var msg = '<li class="item item1"><a href="#">';
				msg += '<div class="hover"><span class="iconfont">&#xe6cb;</span></div>';
				msg += '<img src="./pic/roundicons.png"></a>';
				msg += '<h1 class="symbol">Round Icons</h1>';
				msg += '<p class="title">Graphic Design</p>';
				msg += '</li>';
				$('.loadmore').prev().append($(msg));
			}
			waterFall.realize($('.item'));
		}
		function Errors(){
			console.log("error...");
		}

		return {
			event: event,
			Errors: Errors,
			dealWith: dealWith
		};
	})();
	return loadMore
});