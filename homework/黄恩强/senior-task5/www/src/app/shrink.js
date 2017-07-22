define(function () {
    function Shrink($target) {
        this.$target = $target
        this.bindEvent()
        this.isShrink()
    }
    Shrink.prototype = {
        bindEvent: function () {
            $(window).on('scroll', this.isShrink.bind(this))
        },
        isShrink: function () {
            if (this.isScroll()) {
                this.$target.removeClass('fadeIn')
                this.$target.addClass('navbar-shrink fadeInDownBig')
            } else {
                this.$target.removeClass('navbar-shrink fadeInDownBig')
                this.$target.addClass('fadeIn')
            }

        },
        isScroll: function () {
            let lockY = 120,
                scrollY = window.scrollY
            if (scrollY > lockY) {
                return true
            } else {
                return false
            }
        }
    }
    return {
        open: function ($target) {
            new Shrink($target)
        }
    }
});