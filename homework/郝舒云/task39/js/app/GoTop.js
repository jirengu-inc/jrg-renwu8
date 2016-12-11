   define(['jquery'], function($) {
       function GoTop($contain) {
           this.ct = (!!$contain) ? $contain : $('body');

           this.createNode = function() {
               var $node = $('<a href="javascript:void(0)">TOP</a>');
               $node.css({
                   "display": "block",
                   "width": "50px",
                   "height": "30px",
                   "border": "1px solid #eee",
                   "line-height": "30px",
                   "position": "fixed",
                   "bottom": "10px",
                   "right": "10px",
                   "text-align": "center",
                   "text-decoration": "none",
                   "color": "#555",
                   "display": "none"
               });

               this.ct.append($node);
               return $node;

           };
           this.target = this.createNode();
           this.bindEvent();

       }
       GoTop.prototype = {
           bindEvent: function() {
               var $this = this;

               $(document).on('scroll', function() {
                   if ($(document).scrollTop() > 200) {
                       $this.target.show();
                   } else {
                       $this.target.hide();
                   }

               });
               $this.target.on('click', function() {

                   $(document).scrollTop(0);
               });
           }
       };
       return GoTop;
   });
