define(function () {
    function waterfall($loadButton, $target) {
        this.init($loadButton, $target)
        this.getImagedata()
        this.bindEvent()
    }

    waterfall.prototype = {
        init: function ($loadButton, $target) {
            this.$loadButton = $loadButton
            this.$target = $target

        },
        createHtml: function (res) {
            let waterfall = this,
                $tmpHtmls = $('<ul></ul>')
            $.each(res.data, function (index, value) {
                let imageSrc = value["img"] + value['width'] + "/" + value["height2"] + value["random"]
                work = `
                <li class="item">
                    <ul class="work">
                        <li class="img-wrap">
                            <img src=${imageSrc} alt=${value["title"]}>
                            <div class="img-hover"><span>+</span></div>
                        </li>
                        <li>
                            <h2 class="m-title">${value["title"]}</h2>
                        </li>
                        <li>
                            <p class="m-desc">${value["desc"]}</p>
                        </li>
                    </ul>
                </li>
                `
                $tmpHtmls.append($(work))
                // waterfall.$target.append($(work))
            })
            this.$target.append($tmpHtmls.children())
            this.full()
        },
        initFull: function () {
            this.rowLength = parseInt(this.$target.width() / this.width)
            this.itemArr = []
            //初始化
            for (let i = 0; i < this.rowLength; i++) {
                this.itemArr[i] = 0
            }
        },
        full: function () {
            console.log('full')
            let waterfall = this
            this.$target.find('.item').each(function () {
                let $item = $(this)
                //获取最小数值
                $(this).find('img').on('load', function () {
                    let minValue = Math.min.apply(null, waterfall.itemArr),
                        minIndex = waterfall.itemArr.indexOf(minValue)
                    console.log("加载完毕")
                    $item.css({
                        top: waterfall.itemArr[minIndex],
                        left: $item.outerWidth(true) * minIndex
                    })
                    waterfall.itemArr[minIndex] += $item.outerHeight(true)
                    let maxValue = parseInt(Math.max.apply(null, waterfall.itemArr))
                    waterfall.$target.outerHeight(maxValue + 100)
                })

            })

        },
        bindEvent: function () {
            this.$loadButton.on('click', this.getImagedata.bind(this))
            $(window).on('resize', this.full.bind(this))
        },
        getImagedata: function () {
            let waterfall = this
            $.get('http://rap.taobao.org/mockjsdata/15115/www/portfolio.do', function (res) {
                waterfall.width = parseInt(res.data[0].width)
                if (!waterfall.itemArr) {
                    waterfall.initFull()
                }
                waterfall.createHtml(res)
            })
        }

    }
    return {
        open: function ($loadButton, $target) {
            new waterfall($loadButton, $target)
        }
    }

})