var Exposure = (function () {
    function _exposure($el, callback) {
        this.init($el, callback)
        this.bindScrollEvent()
        this.check()
    }
    _exposure.prototype.init = function ($el, callback) {
        this.$el = $el
        this.callback = callback
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
            _exposure.callback($el)
        }

    }
    _exposure.prototype.isVisible = function ($node) {
        //获取窗口高度、 获取滚动距离、获取元素距离窗口顶部距离、获取元素高度
        let $windowHeight = $(window).outerHeight(),
            $scrollTop = $(window).scrollTop(),
            $offsetNode = $node.offset().top,
            $nodeHeight = $node.outerHeight()
        //判断元素是否出现在窗口范围
        if ($windowHeight + $scrollTop > $offsetNode && $scrollTop < $offsetNode + $nodeHeight) {
            return true
        } else {
            return false
        }
    }

    return {
        init: function ($el, callback) {
            $el.each(function (index, node) {
                new _exposure($(node), callback)
            })

        },
        one: function () {

        }
    }
})()



//设置选项
let options = {
    url: 'http://rap.taobao.org/mockjsdata/15115/jquer5.do',
    newsOption: {
        image: 'src',
    }
}
var LazyLoading = (function LazyLoading() {
    let isLock = false,
        loadCount = 0,
        $parent
    //请求数据
    function getNews(options) {
        //请求数据加锁
        if (isLock) return
        isLock = true
        let { url, newsOption } = options
        $.get(url, response => {
            if (response.status === 200 && response.data.length) {
                let tagString = createTag(response.data, newsOption)
                $parent.append(tagString)
            }
        }).done(() => {
            //数据请求完毕解锁
            isLock = false
            $('.newsList > li:even').css('margin-left', '0')
        })
    }
    //创建标签
    function createTag(newsData, newsOption) {
        let tagString = '',
            { image, title, describe, link } = newsOption
        $.each(newsData, (index, object) => {
            tagString += `
                <li>
                <a class='link clearfix' href=${object[link]}>
                <img src=${object[image]} alt=${object[title]}>
                </a>
                </li>
                `
        })
        return tagString
    }

    return {
        lazy: function lazy($el, options) {
            $parent = $el
            getNews(options)
        }

    }
})();
Exposure.init($('.bottonLoad'), function ($el) {
    LazyLoading.lazy($('.newsList'), options)
})

// Exposure.init($('.newsList img'), function ($el, isShow) {
//     console.log($el.length)
//     $el.attr('src', $el.attr('data-src'))
// })

