define(["jquery"], function($){ 
    $.fn.extend({carousel:function(){

		var $this=$(this),
		    $ct=$this.find('.img-ct'),
			$item=$ct.children(),
			$bullet=$this.find('.bullet'),
			$left=$this.find('.left'),
			$right=$this.find('.right'),
			imgWidth=$(window).width(), //得到全屏窗口的宽度
			imgcount=$ct.children().size();//得到轮播图片的数量

			$ct.prepend($item.last().clone()); //把轮播最后一项复制放到开头部分 
			$ct.append($item.first().clone());//把轮播的第一项复制放到结尾部分

			$ct.find('.item').css('width',imgWidth);//把每个轮播的li宽度设置为窗口宽度
			$ct.find('.cover').css('width',imgWidth);//每个轮播宽度设置为窗口宽度
			imgRealCount=$ct.children().size();//得到增加2个之后 轮播图片的真实个数
			$ct.css({left:0-imgWidth,width:imgRealCount*imgWidth}) //设置left 把增加之后的第一个隐藏起来

		var curIdx=0;
		var lock=false;
			setBg(1);
			autoPlay();

		$left.on('click',function(){
			playPre();
		})
		$right.on('click',function(){
			playNext();
		})

		$bullet.on('click','li', function(){

			var idx = $(this).index();
			if(idx > curIdx){
				playNext(idx - curIdx);
				setBg((idx - curIdx)+1);//防止开始点击后面几个bullet会未加载 白屏
			}else if(idx < curIdx){
				playPre(curIdx - idx);
			}
		});

		function stopAuto(){
			clearInterval(clock);
		}

		function autoPlay(){
			clock = setInterval(function(){
				playNext();
			}, 3000);	
		}

		function playNext(idx){
			var idx = idx ||1; //如果有参数就意味着点击了bullet 可能跳着轮播的,如果没有参数就是点的左右
	
			if (!lock) {
				lock=true;
				setBg(curIdx+2);
				$ct.animate({left:'-='+(idx*imgWidth)},function(){
					curIdx=(idx+curIdx)%imgcount;
					if (curIdx===0) {
						$ct.css({left:0-imgWidth});
					}
					setBullet();
					lock=false;
				})
			}		
		}

		function playPre(idx){
			var idx = idx ||1;
			if (!lock) {
				lock=true;
				setBg(curIdx);
				$ct.animate({left:'+='+(idx*imgWidth)},function(){
					curIdx=(imgcount+curIdx-idx)%imgcount;
					if (curIdx===(imgcount-1)) {
						$ct.css({left:0-imgWidth*imgcount});
					}
					setBullet()
					lock=false;
				})
			}
			
		}

		function setBg(idx){
			var idx = idx || 0 ;
				$node = $ct.children().eq(idx),
				$cover = $node.find('.cover'),
				imgUrl = $cover.attr('data-bg-img');
				if ($node.data('lock')) { return };
				$cover.css('background-image','url('+imgUrl+')');
				$node.data('lock',true);
		}
		function setBullet(){
			$bullet.children().removeClass('active')
							  .eq(curIdx).addClass('active')
		}
	}})
}); 