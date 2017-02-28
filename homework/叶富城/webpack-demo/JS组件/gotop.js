/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-23 22:01:53
 * @version $Id$
 */
	var goTop = (function(){
		function goTop(node){
			this.node = node;
			this.init(node)
			this.bind();
		}
		goTop.prototype = {
			constructor: goTop,

			init : function(node){
				this.timer = null;
				this.isScroll = true;
			},

			bind : function(){
				var that = this;
				this.node.addEventListener('click',function(e){
					that.timer = setInterval(function(){
						var wantTop = document.body.scrollTop || document.documentElement.scrollTop;
						var speed = wantTop/6;
						document.body.scrollTop = document.documentElement.scrollTop = wantTop - speed;
						that.isScroll = true;
					if(wantTop === 0 ){
						clearInterval(that.timer);
					} 
					},30)
				})
				window.addEventListener('scroll',function(){
					if(!that.isScroll){
							clearInterval(that.timer);
					}else{
							that.isScroll = false;
					}
					if($(window).scrollTop()  > 300){
	               		 	$('.goTop').show();
	           		}
	            	if($(window).scrollTop()  < 300){
	                		$('.goTop').hide();
	            	}
				})
			}
		}
		return goTop;

	})();

	module.exports = goTop;