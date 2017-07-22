define(function () {
    function Slider($target) {
        this.init($target)
        this.getWindowdata()
        this.initImageState()
        this.initBulletState()
        this.bindImageEvent()
        this.bindButtonEvent()
        this.bindBulletEvent()
        this.bindResizeEvent()
        this.autoPlay()
    }

    Slider.prototype = {
        init: function ($target) {
            this.$target = $target
            this.$imageParent = $target.children('.image-container')
            this.$buttonParent = $target.children('.button-container')
            this.$bulletParent = $target.children('.bullet-container')
            this.$imageLength = $target.children('.image-container').children().length
            this.autoClock
            this.isPageIndex = 0
            this.isLock = false
        },
        initImageState: function () {
            let Slider = this,
                $firstNode = this.$imageParent.children().first().clone(),
                $lastNode = this.$imageParent.children().last().clone()

            this.$imageParent.prepend($lastNode)
            this.$imageParent.append($firstNode)
            this.$imageNewLength = this.$imageParent.children().length
            Slider.$imageParent.width(Slider.$imageNewLength * Slider.$width)
            Slider.$imageParent.css('left', -Slider.$width)

        },
        bindImageEvent: function () {
            this.$imageParent.on('click', 'a', function (e) {
                e.preventDefault()
            })
        },
        bindButtonEvent: function () {
            let Slider = this,
                $buttonParent = this.$buttonParent
            this.$target.hover(function () {
                $buttonParent.fadeIn()
                Slider.stopPlay()
            }, function () {
                $buttonParent.fadeOut()
                Slider.autoPlay()
            })
            this.$buttonParent.find('.button-left').click(function (e) {
                e.preventDefault()
                console.log('left')
                Slider.playPrevious(1)
            })
            this.$buttonParent.find('.button-right').click(function (e) {
                e.preventDefault()
                console.log('right')
                Slider.playNext(1)
            })
        },
        bindBulletEvent: function () {
            let Slider = this
            Slider.$bulletParent.on('click', 'span', function () {
                let $index = $(this).index()
                // console.log($index)
                Slider.checkClickLength($index)
            })
        },
        bindResizeEvent: function () {
            $(window).on('resize', this.getWindowdata.bind(this))
        },
        bindSrcollEvent: function () {
            let Slider = this

        },
        getWindowdata: function () {
            this.$width = $(window).outerWidth()
            this.$height = $(window).height()
            this.$imageParent.find('img').width(this.$width)
        },
        checkClickLength: function ($index) {
            this.isPageIndex > $index ? (
                this.playPrevious(this.isPageIndex - $index)
            ) : $index > this.isPageIndex ? (
                this.playNext($index - this.isPageIndex)
            ) : null;
        },
        playNext: function (length) {
            this.play('-=', length)
        },
        playPrevious: function (length) {
            this.play('+=', length)
        },
        play: function (move, length) {
            let Slider = this
            if (Slider.isLock) return
            Slider.isLock = true

            Slider.$imageParent.animate({
                'left': move + Slider.$width * length
            }, function () {
                Slider.compilePageindex(move, length)
                Slider.initPageindex()
                Slider.initBulletState()
                Slider.isLock = false
                // console.log(Slider.isPageIndex)
            })
        },
        initBulletState: function () {
            this.$bulletParent.children()
                .removeClass('active')
                .eq(this.isPageIndex)
                .addClass('active')
        },
        compilePageindex: function (move, length) {
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
        },
        initPageindex: function () {
            if (this.isPageIndex > this.$imageLength - 1) {
                this.$imageParent.css('left', -this.$width)
                this.isPageIndex = 0
            } else if (this.isPageIndex < 0) {
                this.$imageParent.css('left', -this.$imageLength * this.$width)
                this.isPageIndex = this.$imageLength - 1
            }
        },
        autoPlay: function () {
            let Slider = this
            this.autoClock = setInterval(function () {
                Slider.playNext(1)
            }, 3000)
        },
        stopPlay: function () {
            clearInterval(this.autoClock)
        }
    }
    return {
        open: function ($target) {
            new Slider($target)
        }
    }
})