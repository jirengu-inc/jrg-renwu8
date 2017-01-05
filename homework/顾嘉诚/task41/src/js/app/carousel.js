define(['jquery'],function($){

	function Carousel($node){
		this.$node = $node;
		this.$ele = this.$node.find('li');
		this.$ct = this.$node.find('ul');
	    imgCnt = this.$ele.length;
		this.winWidth = $(window).outerWidth(true);
		
		this.curCnt = 1;

		this.$ele.width(this.winWidth);

		this.$node.children().prepend(this.$ele.last().clone());
		this.$node.children().append(this.$ele.first().clone());

		this.$ct.css({
			'width': (imgCnt+2) * this.winWidth,
			'margin-left': - this.winWidth * this.curCnt
		});
		this.$ele.eq(this.curCnt).css({
			'background-image': this.$ele.eq(this.curCnt).data('src')
		});
		this.$ele.eq(this.curCnt).addClass('loaded')

		this.autoPlay();
	}

	Carousel.prototype.playNext = function(){
		var dis = 1;
		var _this = this;
		var $ct = _this.$ct;
		_this.curCnt += dis;
		$ct.animate({
			'margin-left': - this.winWidth * this.curCnt
		},500,function(){
			if(!_this.$ele.eq(_this.curCnt).hasClass('loaded')){
				_this.$ele.eq(_this.curCnt).css({
					'background-image': _this.$ele.eq(_this.curCnt).data('src')
				});
				_this.$ele.eq(_this.curCnt).addClass('loaded')
			}
			if(_this.curCnt === 5){
				_this.curCnt = 1;
			}
			$ct.css({
				'margin-left': - _this.winWidth * _this.curCnt
			});
		});
	}

	Carousel.prototype.autoPlay = function(){
		var me = this;
		setInterval(function(){
			me.playNext();
		},2000);
	}
	return Carousel;
});