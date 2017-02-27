var Carousel = (function(){
	function Carousel(node){
		this.ct = node.find('.img-ct');
		this.item = this.ct.children();
		this.arrowL = node.find('.left');
		this.arrowR = node.find('.right');
		this.bullet = node.find('.bullet');
		this.itemCount = this.item.size();
		this.itemRealCount = this.itemCount + 2;
		this.itemWidth = this.item.width();
		this.curIdx = 0;
		this.isMove;

		this.init();
		this.bind();
	}
	Carousel.prototype = {
		init:function(){
			this.ct.append(this.item.first().clone())
				   .prepend(this.item.last().clone());
			this.ct.css({left: 0 - this.itemWidth,width: this.itemWidth * this.itemRealCount});
			this.autoPlay();
		},

		bind:function(){
			var _this = this;
			this.arrowR.on('click',function(){
				_this.playNext();
			})
			this.arrowL.on('click',function(){
				_this.playPre();
			})
			this.bullet.on('click','li',function(){
				var idx = $(this).index();
				if ( idx > _this.curIdx) {
					_this.playNext(idx - _this.curIdx)
				}
				if (idx < _this.curIdx) {
					_this.playPre(_this.curIdx - idx)
				}
			})
		},

		playPre:function(idx){
			if (!this.isMove) {
				var _this = this;
				this.isMove = true;
				var idx = idx || 1;
				this.ct.animate({left: '+='+idx * this.itemWidth},function(){
					_this.curIdx = (_this.itemCount + _this.curIdx - idx) % _this.itemCount;
					if (_this.curIdx === (_this.itemCount-1)) {
						_this.ct.css({left:0 - _this.itemCount * _this.itemWidth})
					}
					_this.setBullet();
					_this.isMove = false;
				})
			}
		},

		playNext:function(){
			if(!this.isMove){
				var _this = this;
				this.isMove = true;
				var idx = idx || 1;
				this.ct.animate({left: '-='+idx*this.itemWidth},function(){
					_this.curIdx = (_this.curIdx + idx) % _this.itemCount;
					if (_this.curIdx === 0) {
						_this.ct.css({left:0 - _this.itemWidth});
					}
					_this.setBullet();
					_this.isMove = false;
				})
			}
		},

		setBullet:function(){
			this.bullet.children().removeClass('active')
								  .eq(this.curIdx).addClass('active');
		},

		autoPlay:function(){
			var _this = this;
			this.clock=setInterval(function(){
				_this.playNext();
			},3000)
		},

		stopPlay:function (){
			clearInterval(this.clock)
		}
	}
	return Carousel;
})();
