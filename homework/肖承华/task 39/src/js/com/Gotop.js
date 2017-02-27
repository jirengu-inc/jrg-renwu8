
define(['jquery'], function( $ ) {


	function goTop(id){
		this.id = id || 'go-top';
		this.init(); 
		this.bind();
	}

	goTop.prototype = {

		init:function(){
			var html ='<div id="'+this.id+'">TOP</div>',
				$html = $(html);
				$('body').append($html);
				this.target = $html;	
		},

		bind:function(){
			var _this=this;
				_this.target.hide();
			$(window).on('scroll',function(){
				var  $scrollTop=$('body').scrollTop();
				if ($scrollTop>100) {
					_this.target.show();
				}
				else{
					_this.target.hide();
				}
			})
			this.target.on('click',function(){
				$('body,html').animate({scrollTop:0},500);
			})
		}
	}

	return goTop; 
});