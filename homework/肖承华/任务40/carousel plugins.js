(function($){
$.fn.carousel = function(){

	$(this).each(function(){
		var $me = $(this),
			$ct = $me.find('.img-ct'),
			$item = $ct.children(),
			$bullet = $me.find('.bullet'),
		$arrowL = $me.find('.left'),
			$arrowR = $me.find('.right'),
			imgWidth = $item.width(),
			imgCount = $item.size(),
			imgRealCount = imgCount + 2,
			currIdx = 0,
			lock;

		init();
		bind();	

		function init(){
			$ct.prepend($item.last().clone());
			$ct.append($item.first().clone());
			$ct.css({
				left: 0 - imgWidth,
				width: imgWidth * imgRealCount
			})
			autoPlay();
		}

		function bind(){
			$arrowR.on('click',function(){
				playNext();
			})
			$arrowL.on('click',function(){
				playPre();
			})
			$bullet.on('click','li',function(){
				var idx = $(this).index();
				if (currIdx > idx) {
					playPre(currIdx - idx);
				}
				if(currIdx < idx){
					playNext(idx - currIdx);
				}
			})
		}

		function playNext(idx){
			var idx = idx || 1;
			if (!lock) {
				lock = true;
				$ct.animate({left: '-='+(imgWidth * idx)},function(){
					currIdx = (idx+currIdx) % imgCount;
					if (currIdx === 0) {
						$ct.css({left:0 - imgWidth})
					}
				setBullet();
				lock = false;
			})	
			}			
		}

		function playPre(idx){
			var idx = idx || 1;
			if (!lock) {
				lock = true;
				$ct.animate({left: '+='+(imgWidth * idx)},function(){
					currIdx = (currIdx+imgCount-idx) % imgCount;
					if (currIdx === (imgCount-1)) {
						$ct.css({left: 0 - imgCount * imgWidth})
					}
					setBullet();
					lock = false;
				})
			}				
		}

		function setBullet(){
			$bullet.children().removeClass('active')
							  .eq(currIdx).addClass('active')
		}

		function autoPlay(){
			clock=setInterval(function(){
				playNext();
			},3000)
		}

		function stopPlay(){
			clearInterval(clock)
		}
	})
}
})(jQuery)
