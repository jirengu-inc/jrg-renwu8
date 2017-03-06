/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-20 00:03:54
 * @version $Id$
 */
  var Lazy = (function(){
    var exposure = function(node,callback){//创建一个曝光组件
      this.node = node;
      this.callback = callback;
      this.bind();
      this.checkShow();
    }
  exposure.prototype.bind = function(){
    var _this = this;
    window.addEventListener('scroll',function(e){
        _this.checkShow(_this.node);
    })
  }
  exposure.prototype.checkShow = function(){
      var windowH = window.innerHeight;//窗口高度
      var scrollT = document.body.scrollTop;//滚动条滚动距离
      var nodeOffset = this.node.offsetTop;//元素到顶部距离
      var nodeH = this.node.offsetHeight;//元素自身高度
      if(windowH + scrollT > nodeOffset && nodeOffset + nodeH >scrollT){
      	console.log(true);
        this.callback(this.node);
        this.node.attr('class', 'hadshow');
      }else{
        return;
      }
  }
    return {
      init : function(node,callback){
        if(node.length){
          [].slice.call(node).forEach(function(node){//[].slice.call是将类数组对象转换为数组
          new exposure(node,callback);
        })
        }else{
          new exposure(node,callback);
        }
      }
    }
  })();

 







// var Lazy = (function(){
//   var Exposure = function($node,callback){
//     this.node = $node;
//     console.log(1)
//     this.callback = callback;
//     this.bind();
//     this.checkShow();
//     }
//       Exposure.prototype = {
//       bind : function(){
//         var _this = this;
//         $(window).on('scroll',function(){
//           _this.checkShow(_this.node);
//         })
//       },

//       checkShow : function(){
//         var windowH = $(window).height(),
//         offsetH = this.node.offset().top,
//         scrollH = $(window).scrollTop()
//         eleH    = this.node.outerHeight();
//         if(windowH + scrollH > offsetH && offsetH + eleH > scrollH){
//           this.callback(this.node);
//         }else{
//           return;
//         }
//     }
//   }
//     return {
//     init: function($targets, callback){
//       if($targets.length){
//         $targets.each(function(idx, target){
//           new Exposure($(target), callback);
//         })  
//       }else{
//           new Exposure($(target), callback)
//       }
//     },
//   }
// })()