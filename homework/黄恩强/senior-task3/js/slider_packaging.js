var sliderLiving = (function () {
    function _Slider($el) {
        this.init($el)
        this.initImageState()
        this.initBulletState()
        this.bindImageEvent()
        this.bindButtonEvent()
        this.bindBulletEvent()
        this.autoPlay()
    }

    _Slider.prototype.init = function ($el) {
        this.$imageParent = $el.children('.imageContainer')
        this.$buttonParent = $el.children('.buttonContainer')
        this.$bulletParent = $el.children('.bulletContainer')
        this.$imageLength = $el.children('.imageContainer').children().length
        this.autoClick
        this.randomNubmer = Math.floor(Math.random() * 1000 + 1000)
        this.isPageIndex = 0
        this.isLock = false
    }
    _Slider.prototype.initImageState = function () {
        let Slider = this,
            $firstNode = this.$imageParent.children().first().clone(),
            $lastNode = this.$imageParent.children().last().clone()

        this.$imageParent.prepend($lastNode)
        this.$imageParent.append($firstNode)
        this.$imageNewLength = this.$imageParent.children().length
        this.$imageParent.find('img').first().on('load', function (e) {
            Slider.$imageWidth = $(this).width()
            Slider.$imageParent.width(Slider.$imageNewLength * Slider.$imageWidth)
            Slider.$imageParent.css('left', -Slider.$imageWidth)
        })
    }
    _Slider.prototype.bindImageEvent = function () {
        this.$imageParent.on('click', 'a', function (e) {
            e.preventDefault()
        })
    }
    _Slider.prototype.bindButtonEvent = function () {
        let Slider = this
        this.$buttonParent.find('.buttonLeft').click(function (e) {
            e.preventDefault()
            console.log('left')
            Slider.playPrevious(1)
        })
        this.$buttonParent.find('.buttonRight').click(function (e) {
            e.preventDefault()
            console.log('right')
            Slider.playNext(1)
        })
    }
    _Slider.prototype.bindBulletEvent = function () {
        let Slider = this
        Slider.$bulletParent.on('click', 'span', function () {
            let $index = $(this).index()
            console.log($index)
            Slider.checkClickLength($index)
        })
    }
    _Slider.prototype.checkClickLength = function ($index) {
        this.isPageIndex > $index ? (
            this.playPrevious(this.isPageIndex - $index)
        ) : $index > this.isPageIndex ? (
            this.playNext($index - this.isPageIndex)
        ) : NavigatorUserMediaSuccessCallback
    }
    _Slider.prototype.playNext = function (length) {
        this.play('-=', length)
    }
    _Slider.prototype.playPrevious = function (length) {
        this.play('+=', length)
    }
    _Slider.prototype.play = function (move, length) {
        let Slider = this
        if (Slider.isLock) return
        Slider.isLock = true

        Slider.$imageParent.animate({
            'left': move + Slider.$imageWidth * length
        }, function () {
            Slider.initPageindex2(move, length)
            Slider.initPageindex()
            Slider.initBulletState()
            Slider.isLock = false
            console.log(Slider.isPageIndex)
        })
    }
    _Slider.prototype.initBulletState = function () {
        this.$bulletParent.children()
            .removeClass('active')
            .eq(this.isPageIndex)
            .addClass('active')
    }
    _Slider.prototype.initPageindex2 = function (move, length) {
        if (move === '-=') {
            if (length === 1) {
                this.isPageIndex++
            } else {
                this.isPageIndex += length
            }
        } else {
            if (length === 1) {
                this.isPageIndex--
            } else {
                this.isPageIndex -= length
            }
        }
    }
    _Slider.prototype.initPageindex = function () {
        if (this.isPageIndex > this.$imageLength - 1) {
            this.$imageParent.css('left', -this.$imageWidth)
            this.isPageIndex = 0
        } else if (this.isPageIndex < 0) {
            this.$imageParent.css('left', -this.$imageLength * this.$imageWidth)
            this.isPageIndex = this.$imageLength - 1
        }
    }
    _Slider.prototype.autoPlay = function () {
        let Slider = this
        console.log( this.randomNubmer)
        this.autoClicks = setInterval(function () {
            Slider.playNext(1)
        }, this.randomNubmer)
    }
    // new Slider($('.sliderModule').eq(0))

    function start($el) {
        $el.each(function () {
            new _Slider($(this))
        })
    }
    return {
        start: start
    }
})();

sliderLiving.start($('.sliderModule'))