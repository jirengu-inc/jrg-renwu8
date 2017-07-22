define(function () {
    function Gotop($target) {
        this.$target = $target,
            this.bindEvent()
        this.isShow()
    }
    Gotop.prototype = {
        bindEvent: function () {
            let Gotop = this
            $(window).scroll(this.isShow.bind(this))
            this.$target.on('click', function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
            })
        },
        isShow: function () {
            if ($(window).scrollTop() != 0) {
                this.$target.fadeIn()
            } else {
                this.$target.fadeOut()
            }
        }
    }
    return {
        open: function ($target) {
            new Gotop($target)
        }
    }
})