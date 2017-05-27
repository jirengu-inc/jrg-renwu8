function Tab($el) {
    this.init($el)
    this.bindEvent()
}

Tab.prototype.init = function ($el) {
    this.$el = $el
    let $index = $el.find('.tabCard > .active').index()
    let isExist = $el.find('.tabCard > .active').length ? true : false
    this.$index = isExist ? $index : 0
}
Tab.prototype.bindEvent = function () {
    let $tabCard = this.$el.find('.tabCard')
    $tabCard.on('click', 'li', function () {
        let $this = $(this),
            $tabPanels = $this.parents('.tabModule').find('.tabPanel > li'),
            $index = $this.index()

        $this.siblings().removeClass('active')
        $this.addClass('active')

        $tabPanels.siblings().removeClass()
        $tabPanels.eq($index).addClass('active animated fadeInUp')
    })
}

var tab = new Tab($('.tabModule'))