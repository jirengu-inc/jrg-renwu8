define(['jquery'],function($){
	function Exposure(node){
		this.node = $(node);
		this.init();
		this.bind();
	}

	Exposure.prototype = {

		init:function(){
			this.node.css('opacity',0)
		},

		bind:function(){
			var _this = this;
			this.checkShow();
			$(window).on('scroll',function(){
				_this.checkShow();
			})
		},
		
		checkShow:function(){
			if (this.isShow()) {
				this.node.animate({opacity:1},500)
			}	
		},

		isShow:function(){

			var nodeH = this.node.offset().top,
				scrollH = $(window).scrollTop(),
				windowH = $(window).height();
			return ((scrollH + windowH > nodeH) && (nodeH > scrollH) ) ? true:false;			
		}
	}
	return Exposure;
})