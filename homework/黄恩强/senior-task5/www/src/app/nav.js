define(['./exposure'], function (exposure) {
    function nav($target) {
        this.init($target)
        this.bindSelectedEvent()
        this.bindGotoSelectEvent()
    }
    nav.prototype = {
        init: function ($target) {
            this.$target = $target
        },
        bindSelectedEvent: function () {
            $('body').children('.exposure').each(function (index, target) {
                exposure.open($(target), function ($el) {
                    $('.' + $el.attr('id')).addClass('active')
                }, function ($el) {
                    $('.' + $el.attr('id')).removeClass('active')
                })
            })
        },
        bindGotoSelectEvent: function () {
            this.$target.on('click', 'li', function () {
                let $target = $(this),
                    $targetName = $(this).attr('data-target'),
                    $targetTop = $('#' + $targetName).offset().top
                $('body').animate({
                    'scrollTop': $targetTop
                }, 800)
            })
        }
    }


    return {
        open: function ($target) {
            new nav($target)
        }
    }

})