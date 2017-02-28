/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-21 11:26:55
 * @version $Id$
 */
      var lazy = (function(){
        var Exposure = function($node,callback){
        this.node = $node;
        this.callback = callback;
        this.bind();
        this.checkShow();
        }
          Exposure.prototype = {
          bind : function(){
            var _this = this;
            $(window).on('scroll',function(){
              _this.checkShow(_this.node);
            })
          },

          checkShow : function(){
            var windowH = $(window).height(),
            offsetH = this.node.offset().top,
            scrollH = $(window).scrollTop()
            eleH    = this.node.outerHeight();
            if(windowH + scrollH > offsetH && offsetH + eleH > scrollH){
              this.callback(this.node);
            }else{
              return;
            }
        }
      }
      return {
        init: function($targets, callback){
          if($targets.length){
            $targets.each(function(idx, target){
              new Exposure($(target), callback);
            })  
          }else{
              new Exposure($(target), callback)
          }
        }
      }
      })()

      module.exports = lazy;