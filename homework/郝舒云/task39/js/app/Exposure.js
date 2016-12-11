    define(['jquery'], function($) { function Exposure($node, tap) {
        this.$node = $node;
        this.tap = tap;
        this.BindEvent();
    }
    Exposure.prototype = {
        isVisible: function($node) {
            var nodeheight = $node.height();
            var top = $(document).scrollTop();
            var tall = $node.offset().top;
            var windowheight = $(window).height();
            if (windowheight + top > tall && top < tall + nodeheight) {
                return true;
            } else {
                return false;
            }

        },

        loadimgs: function($node, item) {
        	var _this=this;
            var mark = item + '[flag=0]';
            $node.find(mark).each(function() {
                var $img_node = $(this);
                if (_this.isVisible($img_node)) {
                    $img_node.animate({
                        'opacity': 1
                    }, 1000);

                    $img_node.attr('flag', 1);
                }
            });
        },
        BindEvent: function() {
            var _this = this;
            _this.$node.find(_this.tap).attr('flag', 0);
            _this.loadimgs(_this.$node, _this.tap);
            $(document).on('scroll', function() {

                _this.loadimgs(_this.$node, _this.tap);

            });
        }
    };return Exposure; });