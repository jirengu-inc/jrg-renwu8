       define(['jquery'], function($) {
                   function WaterFall($node, $btn) {
                       this.$con = $node;
                       this.verwidth = this.$con.find('li').outerWidth(true);
                       var mainwidth = $(window).width();
                       this.len = Math.floor(mainwidth / this.verwidth);
                       this.imgs = [];
                       this.index = 0;
                       this.page = 1;
                       this.$loadbtn = $btn;
                   }
                   WaterFall.prototype = {
                       imgsort: function($items) {
                           var _this = this;
                           if (_this.imgs.length <= 0) {
                               for (var i = 0; i < _this.len; i++) {
                                   _this.imgs[i] = 0;
                               }
                           }
                           $items.each(function() {
                               $item = $(this);
                               index = _this.findmin(_this.imgs);
                               $item.css({
                                   left: index * _this.verwidth,
                                   top: _this.imgs[index]
                               });
                               _this.imgs[index] += $item.outerHeight(true);
                               _this.$con.height(_this.imgs[index]);
                           });
                       },

                       getdataquery: function(page) {
                           var _this = this;
                           $.ajax({
                               type: "get",
                               async: false,
                               url: "http://platform.sina.com.cn/slide/album_tech?jsoncallback=?&app_key=1271687855&num=6&page=" + page + "",
                               dataType: "jsonp", //数据类型为jsonp  
                               jsonp: "jsonpcallback", //服务端用于接收callback调用的function名的参数  
                               success: function(data) {
                                   _this.appenddata(data);
                               },
                               error: function() {
                                   alert('fail');
                               }
                           });

                       },

                       appenddata: function(objson) {
                           var _this = this;
                           var objs = objson.data;

                           var lis = "";

                           for (var item in objs) {
                               lis += '<li><a href="' + objs[item].url + '"><img src="' + objs[item].img_url + '" alt=""></a><p>' + objs[item].short_name + '</p><p>' + objs[item].name + '</p></li>';
                           }
                           var $lis = $(lis);
                           var diferreds = [];

                           _this.$con.append($lis);

                           $lis.find('img').each(function() {
                               var delay = $.Deferred();
                               diferreds.push(delay);
                               var $this = $(this);
                               $this.load(function() {

                                   delay.resolve();
                               });

                           });
                           $.when.apply(null, diferreds).done(function() {

                               _this.imgsort($lis);

                           });

                       },
                       findmin: function(arr) {
                           var min = arr[0];
                           var minindex = 0;
                           for (var i = 0; i < arr.length; i++) {
                               if (min > arr[i]) {
                                   min = arr[i];
                                   minindex = i;
                               }
                           }
                           return minindex;
                       },
                       bindEvent: function() {
                           var _this = this;
                           this.$loadbtn.on('click', function() {
                               _this.page++;
                               _this.getdataquery(_this.page);
                           });
                           _this.getdataquery(_this.page);
                       }
                   };
                   return WaterFall;
               });
