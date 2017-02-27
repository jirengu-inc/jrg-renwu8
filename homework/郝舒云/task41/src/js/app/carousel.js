          define(['jquery'], function($) {
           function Carousel($item) {
        var imgul = $('.imgs');
        var nowli = $('.icons').find('li');
        var imgsli = imgul.find('li');
        var li_len = nowli.length;
        var width = $item.width();

        var left = $item.find('.left');
        var right = $item.find('.right');
        this.statuscollection = {
            imgul: imgul,
            imgsli: imgsli,
            nowli: nowli,
            li_len: li_len,
            rollFlag: false,
            now_index: 0,
            new_index: 0,
            width: width,

            setTime: -1,
            left: left,
            right: right

        };
    }
    Carousel.prototype = {

        gotonext: function(len) {
            var rollstatus = this.statuscollection;
            rollstatus.new_index = (rollstatus.now_index + len) % rollstatus.li_len;
            rollstatus.nowli.eq(rollstatus.new_index).addClass('bg').siblings().removeClass('bg');
            rollstatus.imgul.animate({
                left: '-=' + rollstatus.width * len
            }, 1000, function() {
                if (rollstatus.new_index == 0) {
                    rollstatus.imgul.css('left', (-1) * rollstatus.width);
                }
                rollstatus.now_index = rollstatus.new_index;
                rollstatus.rollFlag = false;
            });

        },
        goback: function(len) {
            var rollstatus = this.statuscollection;
            rollstatus.new_index = (rollstatus.now_index - len + rollstatus.li_len) % rollstatus.li_len;
            rollstatus.nowli.eq(rollstatus.new_index).addClass('bg').siblings().removeClass('bg');
            rollstatus.imgul.animate({
                left: '+=' + rollstatus.width * len
            }, 1000, function() {
                if (rollstatus.new_index == rollstatus.li_len - 1) {
                    rollstatus.imgul.css('left', rollstatus.width * rollstatus.li_len * (-1));

                }
                rollstatus.now_index = rollstatus.new_index;
                rollstatus.rollFlag = false;
            });

        },
        rollStart: function() {
            var _this = this;
            this.statuscollection.setTime = setInterval(function() {
                _this.gotonext(1);
            }, 4000);

        },
        bindEvent: function() {
            var _this = this;
            var rollstatus = this.statuscollection;
            rollstatus.right.on('click', function() {

                if (rollstatus.rollFlag) {
                    return;
                }
                rollstatus.rollFlag = true;
                clearInterval(rollstatus.setTime);
                _this.gotonext(1);

                _this.rollStart();


            });
            rollstatus.left.on('click', function() {

                if (rollstatus.rollFlag) {
                    return;
                }
                rollstatus.rollFlag = true;
                clearInterval(rollstatus.setTime);
                _this.goback(1);

                _this.rollStart();
            });

            rollstatus.nowli.on('click', function() {
                var $index = $(this).index();
                if (rollstatus.rollFlag) {
                    return;
                }

                clearInterval(rollstatus.setTime);
                rollstatus.rollFlag = true;
                if ($index > rollstatus.now_index) {
                    _this.gotonext($index - rollstatus.now_index);
                }
                if ($index < rollstatus.now_index) {
                    _this.goback(rollstatus.now_index - $index);
                }
                _this.rollStart();
            });
            var last_li = rollstatus.imgsli.eq(0).clone();
            var first_li = rollstatus.imgsli.eq(rollstatus.li_len - 1).clone();
            rollstatus.imgul.prepend(first_li);
            rollstatus.imgul.append(last_li);
            rollstatus.imgul.css('left', (-1) * rollstatus.width);
            rollstatus.imgul.css('width', rollstatus.width * (rollstatus.li_len + 2));
            rollstatus.imgul.find('li').width(rollstatus.width);
            _this.rollStart();
        }

    };
return Carousel; });