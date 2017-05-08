$(function () {
    function xxx(options) {
        //选项
        let xxx = this
        xxx.initOptions(options)

        //html载入
        xxx.createImageHtml()
        xxx.createButtonHtml()

        //初始状态
        xxx.initImage()
        !xxx.width && !xxx.height ? (
            xxx.getWidthHeight(),
            console.log(xxx, 'getWidthHeight')
        ) : (
                xxx.initImageState(),
                console.log(xxx, 'initImageState')
            );


        xxx.a = setTimeout(function () {
            //初始页码
            xxx.sliderParent.initPage ? xxx.initPage() : null

            //按钮类型
            xxx.buttonParent.type == 'round' ? (
                xxx.createRoundButton()
            ) : xxx.buttonParent.type == 'square' ? (
                xxx.createSquareButton()
            ) : null;
            //底部按钮类型
            xxx.bulletParent.type == 'dot' ? (
                xxx.createDotBullet()
            ) : xxx.bulletParent.type == 'thumbnail' ? (
                xxx.createThumbnailBullet()
            ) : null;
            //初始底部按钮状态
            xxx.initBulletState()
            //选项载入
            xxx.sliderParent.autoPlay ? xxx.autoPlay() : null;
            xxx.buttonParent.autoDisplay ? xxx.buttonAutoDisplay() : null;
            xxx.bulletParent.autoDisplay ? xxx.bulletAutoDisplay() : null;
            ///綁定事件
            xxx.bulletBindClick()
            xxx.buttonBindClick()
            xxx.buttonBindState()
        }, 500)

    }
    xxx.prototype.initOptions = function (options) {
        let xxx = this
        xxx.isPageIndex = 0
        xxx.isAnimate = false

        $.each(options, function (index, value) {
            xxx[index] = value
        })
        xxx.imageParent.node = xxx.sliderParent.node.children('.imageParent')
        xxx.buttonParent.node = xxx.sliderParent.node.children('.buttonParent')
        xxx.bulletParent.node = xxx.sliderParent.node.children('.bulletParent')

    }
    xxx.prototype.initPage = function () {
        let xxx = this,
            $imageParent = xxx.imageParent.node,
            initPage = xxx.sliderParent.initPage
        xxx.isPageIndex = initPage
        initPage > 0 ? initPage : 1
        $imageParent.css('left', -xxx.width * (initPage + 1))
    }
    xxx.prototype.getWidthHeight = function () {
        let xxx = this,
            $imageParent = xxx.imageParent.node
        $imageParent.find('img').last().on('load', function (e) {
            xxx.width = $(this).width()
            xxx.height = $(this).height()
            xxx.initImageState()
        })

    }
    xxx.prototype.getData = function () {
        let xxx = this,
            temp = []
        $.get(xxx.imageData, function (res) {
            for (let i = 0; i < xxx.length; i++) {
                let index = Math.floor(Math.random() * res.length)
                temp.push(res[index])
            }
        }).done(function () {
            xxx.imageData = temp
            xxx.createHtml()
        })
    }
    xxx.prototype.createImageHtml = function () {
        let xxx = this,
            imageHtml = '',
            imageData = xxx.imageParent.data
        $.each(imageData, function (index, value) {
            imageHtml += `<li data-index=${index}><a href="#"><img alt='${value.author}' src=${value.post_url}></a></li>`
        })
        xxx.imageParent.node.append(imageHtml)
    }
    xxx.prototype.createButtonHtml = function () {
        let xxx = this,
            buttonHtml = '',
            $buttonParent = xxx.buttonParent.node
        buttonHtml += `<a data-id='left'href='#' class='button buttonLeft'><span>&lt;</span></a>`
        buttonHtml += `<a data-id='right'href='#' class='button buttonRight'><span>&gt;</span></a>`
        $buttonParent.append(buttonHtml)
    }
    xxx.prototype.createRoundButton = function () {
        let xxx = this,
            $buttonParent = xxx.buttonParent.node,
            type = xxx.buttonParent.type
        $buttonParent.addClass(type)
    }
    xxx.prototype.createSquareButton = function () {
        let xxx = this,
            $buttonParent = xxx.buttonParent.node,
            type = xxx.buttonParent.type
        $buttonParent.addClass(type)
    }
    xxx.prototype.createDotBullet = function () {
        let xxx = this,
            bulletHtml = '',
            $bulletParent = xxx.bulletParent.node,
            type = xxx.bulletParent.type
        for (let i = 0; i < xxx.length; i++) {
            bulletHtml += `<a></a>`
        }
        $bulletParent.addClass(type)
        $bulletParent.append(bulletHtml)
    }
    xxx.prototype.createThumbnailBullet = function () {
        let xxx = this,
            bulletHtml = '',
            imageData = xxx.imageParent.data,
            $bulletParent = xxx.bulletParent.node,
            type = xxx.bulletParent.type
        $.each(imageData, function (index, value) {
            bulletHtml += `<a data-index=${index} href="#"><img alt='${value.author}' src=${value.post_url}></a>`
        })
        $bulletParent.addClass(type)
        xxx.bulletParent.node.append(bulletHtml)
        console.log(xxx.width)
        // xxx.bulletParent.node.find('img').css('width', xxx.width * 0.13).css('height', xxx.height * 0.18)
    }
    xxx.prototype.initImage = function () {
        let xxx = this,
            $imageParent = xxx.imageParent.node,
            $firstNode,
            $lastNode
        //获取原始长度
        xxx.length = $imageParent.children().length
        //首尾克隆
        $firstNode = $imageParent.find('li').first().clone()
        $lastNode = $imageParent.find('li').last().clone()
        $imageParent.prepend($lastNode)
        $imageParent.append($firstNode)
        //获取克隆后长度
        xxx.newLength = $imageParent.children().length
    }
    xxx.prototype.initImageState = function () {
        let xxx = this,
            $sliderParent = xxx.sliderParent.node,
            $imageParent = xxx.imageParent.node
            console.log(xxx.width)
        $sliderParent.width(xxx.width)
        $sliderParent.height(xxx.height)
        $imageParent.width(xxx.newLength * xxx.width)
        $imageParent.css('left', -xxx.width)
    }
    xxx.prototype.initBulletState = function () {
        let xxx = this,
            $bulletParent = xxx.bulletParent.node,
            isPageIndex = xxx.isPageIndex
        $bulletParent.children().eq(isPageIndex).addClass('active')
    }
    xxx.prototype.play = function (length, move) {
        let xxx = this,
            $imageParent = xxx.imageParent.node
        if (xxx.isAnimate) return
        xxx.isAnimate = true

        $imageParent.animate({
            'left': move + length * xxx.width,
        }, function () {
            xxx.checkButtonOrBullet(length, move)
            xxx.circulation()
            xxx.setBullet()
        })
    }
    xxx.prototype.playNext = function (length) {
        if (!length) return '未賦值長度';
        length > 1 ? length : 1
        this.play(length, '-=')
    }
    xxx.prototype.playPrevious = function (length) {
        if (!length) return '未賦值長度'
        length > 1 ? length : 1
        this.play(length, '+=')
    }
    xxx.prototype.checkButtonOrBullet = function (length, move) {
        let xxx = this
        length > 1 ? (
            move == '-=' ? xxx.isPageIndex += length : xxx.isPageIndex -= length
        ) : (
                move == '-=' ? xxx.isPageIndex++ : xxx.isPageIndex--
            );
    }
    xxx.prototype.circulation = function () {
        let xxx = this,
            $imageParent = xxx.imageParent.node
        xxx.isPageIndex > xxx.length - 1 ? (
            $imageParent.css('left', -xxx.width),
            xxx.isPageIndex = 0
        ) : xxx.isPageIndex < 0 ? (
            $imageParent.css('left', -xxx.length * xxx.width),
            xxx.isPageIndex = xxx.length
        ) : null

        xxx.isAnimate = false
    }
    xxx.prototype.setBullet = function () {
        let xxx = this,
            $bulletParent = xxx.bulletParent.node
        $bulletParent.children()
            .removeClass('active')
            .eq(xxx.isPageIndex)
            .addClass('active')
    }

    xxx.prototype.autoPlay = function () {
        let xxx = this
        xxx.clock = setInterval(function () {
            xxx.playNext(1)
        }, 3000)
    }
    xxx.prototype.stopPlay = function () {
        let xxx = this
        clearInterval(xxx.clock)
    }
    xxx.prototype.buttonBindClick = function () {
        let xxx = this,
            $buttonParent = xxx.buttonParent.node
        $buttonParent.on('click', 'a', function (e) {
            e.preventDefault()
            $(this).hasClass('buttonLeft') ? (
                xxx.playPrevious(1)
            ) : $(this).hasClass('buttonRight') ? (
                xxx.playNext(1)
            ) : null;
        })

    }
    xxx.prototype.bulletBindClick = function () {
        let xxx = this,
            $bulletParent = xxx.bulletParent.node
        $bulletParent.on('click', 'a', function (e) {
            e.preventDefault()
            let $curIndex = $(this).index()
            $curIndex > xxx.isPageIndex ? (
                xxx.playNext($curIndex - xxx.isPageIndex)
            ) : $curIndex < xxx.isPageIndex ? (
                xxx.playPrevious(xxx.isPageIndex - $curIndex)
            ) : null;
        })

    }
    xxx.prototype.buttonAutoDisplay = function () {
        let xxx = this,
            $buttonParent = xxx.buttonParent.node
        xxx.sliderParent.node.hover(function () {
            $buttonParent.fadeIn()
            xxx.stopPlay()
        }, function () {
            $buttonParent.fadeOut()
            xxx.autoPlay()
        })
    }
    xxx.prototype.bulletAutoDisplay = function () {
        let xxx = this,
            $bulletParent = xxx.bulletParent.node
        xxx.sliderParent.node.hover(function () {
            $bulletParent.fadeIn()
        }, function () {
            $bulletParent.fadeOut()
        })
    }
    xxx.prototype.buttonBindState = function () {
        let xxx = this,
            $buttonParent = xxx.buttonParent.node
        $buttonParent.on('mouseenter', 'a', function () {
            $(this).hasClass('buttonLeft') ? (
                $(this).addClass('active')
            ) : $(this).hasClass('buttonRight') ? (
                $(this).addClass('active')
            ) : null;

        })
        $buttonParent.on('mouseleave', 'a', function () {
            $(this).hasClass('buttonLeft') ? (
                $(this).removeClass('active')
            ) : $(this).hasClass('buttonRight') ? (
                $(this).removeClass('active')
            ) : null;

        })
    }
    var data = [{
        author: '#1',
        post_url: '//img11.360buyimg.com/da/jfs/t4657/90/3561484677/83893/f05ac312/59004d0dNc66933b4.png'
    },
    {
        author: '#2',
        post_url: '//img1.360buyimg.com/da/jfs/t5122/78/482212244/90225/c4ccd3b7/59001933Nb4a11a00.jpg'
    },
    {
        author: '#3',
        post_url: '//img12.360buyimg.com/da/jfs/t3172/29/7532815266/78514/96c6e177/58ba3348N479cafe1.jpg'
    },
    {
        author: '#4',
        post_url: '//img20.360buyimg.com/da/jfs/t4249/102/1331521120/224199/40dcb547/58c0b221N5acfd3c6.jpg'
    },
    {
        author: '#5',
        post_url: '//img13.360buyimg.com/da/jfs/t5518/250/560655744/102051/9f4965b2/5901d835N6c3481c7.jpg'
    }]

    var food = [{
        author: '#1',
        post_url: 'http://lorempixel.com/790/340/food/'
    },
    {
        author: '#2',
        post_url: 'http://lorempixel.com/790/340/food/'
    },
    {
        author: '#3',
        post_url: 'http://lorempixel.com/790/340/food/'
    },
    {
        author: '#4',
        post_url: 'http://lorempixel.com/790/340/food/'
    },
    {
        author: '#5',
        post_url: 'http://lorempixel.com/790/340/food/'
    }]
    var random = [{
        author: '#1',
        post_url: 'https://unsplash.it/1280/720/?random=100'
    },
    {
        author: '#2',
        post_url: 'https://unsplash.it/1280/720/?random=200'
    },
    {
        author: '#3',
        post_url: 'https://unsplash.it/1280/720/?random=300'
    },
    {
        author: '#4',
        post_url: 'https://unsplash.it/1280/720/?random=400'
    },
    {
        author: '#5',
        post_url: 'https://unsplash.it/1280/720/?random=500'
    }]

    new xxx({
        sliderParent: {
            //需要载入元素API
            node: $('.sliderParent'),
            //是否自动播放API
            autoPlay: true,
            // 初始化页码API
            initPage: null
        },
        imageParent: {
            // 轮播类型 功能暂未完成
            type: 'roll', //fade
            // 图像数据
            data: random
        },
        buttonParent: {
            // 两边按钮类型API
            type: 'square', //square round
            // 是否自动显示API
            autoDisplay: true
        },
        bulletParent: {
            // 选择底部显示类型API
            type: 'thumbnail',//thumbnail dot
            // 是否自动显示API
            autoDisplay: false
        }
    })

})