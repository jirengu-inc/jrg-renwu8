define(function () {
    function _exposure($el, inCallback, outCallback) {
        this.init($el, inCallback, outCallback)
        this.bindScrollEvent()
        this.check()
    }
    _exposure.prototype.init = function ($el, inCallback, outCallback) {
        this.$el = $el
        this.inCallback = inCallback
        this.outCallback = outCallback
        this.$window = $(window)
        this.clock
    }
    _exposure.prototype.bindScrollEvent = function () {
        let _exposure = this
        _exposure.$window.on('scroll', () => {
            if (_exposure.clock) {
                clearTimeout(_exposure.clock)
            }
            _exposure.clock = setTimeout(() => {
                _exposure.check()
            }, 300)
        })
    }
    _exposure.prototype.check = function () {
        let _exposure = this,
            $el = _exposure.$el,
            isShow = _exposure.isVisible($el)
        if (isShow) {
            _exposure.inCallback($el)
        } else {
            _exposure.outCallback($el)
        }

    }
    _exposure.prototype.isVisible = function ($node) {
        //获取窗口高度、 获取滚动距离、获取元素距离窗口顶部距离、获取元素高度
        let $windowHeight = $(window).outerHeight(),
            $scrollTop = $(window).scrollTop() + 200,
            $offsetNode = $node.offset().top,
            $nodeHeight = $node.outerHeight(true)
        //判断元素是否出现在窗口范围

        if ($scrollTop > $offsetNode && $scrollTop < $offsetNode + $nodeHeight) {
            return true
        } else {
            return false
        }
    }

    return {
        open: function ($el, inCallback, outCallback) {
            $el.each(function (index, node) {
                new _exposure($(node), inCallback, outCallback)
            })

        }
    }
})