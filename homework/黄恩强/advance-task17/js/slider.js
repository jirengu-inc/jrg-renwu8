var $sliderContainer = $('.sliderContainer'),
    $imageContainer = $('.imageContainer'),
    sliderLenght = $imageContainer.children().length,
    sliderNewLenght,
    imageWidth = $imageContainer.find('li').first().width(),
    isAnimateLock = false,
    isPageIndex = 0



function init() {
    let firstNodeClone = $imageContainer.find('li').first().clone(),
        lastNodeClone = $imageContainer.find('li').last().clone()

    $imageContainer.prepend(lastNodeClone)
    $imageContainer.append(firstNodeClone)

    sliderNewLenght = $imageContainer.children().length
    $imageContainer.width(sliderNewLenght * imageWidth)
    $imageContainer.css('left', - imageWidth)
}

function play(length, move) {
    if (isAnimateLock) return
    isAnimateLock = true

    $imageContainer.animate({
        left: move + imageWidth * length
    }, 300, function () {
        buttonOrDot(length, move)
        resetSlider()
        setDot()
        isAnimateLock = false
    })
}

function buttonOrDot(length, move) {
    if (length > 1) {
        if (move === '-=') {
            isPageIndex += length
        } else {
            isPageIndex -= length
        }
    } else if (length === 1) {
        if (move === '-=') {
            isPageIndex++
        } else {
            isPageIndex--
        }
    }
}
function resetSlider() {
    if (isPageIndex > sliderLenght - 1) {
        $imageContainer.css('left', - imageWidth)
        isPageIndex = 0
    } else if (isPageIndex < 0) {
        $imageContainer.css('left', - imageWidth * sliderLenght)
        isPageIndex = sliderLenght
    }

}
function playNext(index) {
    //正数
    // 4
    play(index, '-=')
}
function playPrevious(index) {
    //负数
    // 2
    play(index, '+=')
}
function setDot() {
    $dots.children()
        .removeClass('active')
        .eq(isPageIndex)
        .addClass('active')

}
function autoPlay() {
    clock = setInterval(function () {
        playNext(1)
    }, 1600)
}
function stopPlay() {
    clearInterval(clock)
}

init()
autoPlay()

var $buttons = $sliderContainer.children('a'),
    $dots = $sliderContainer.find('.dot')

$buttons.hover(function () {
    $(this).addClass('active')
}, function () {
    $(this).removeClass('active')
})
$buttons.click(function (e) {
    stopPlay()
    e.preventDefault()
    if ($(this).hasClass('buttonLeft')) {
        console.log('left')
        playPrevious(1)
    } else if ($(this).hasClass('buttonRight')) {
        console.log('right')
        playNext(1)
    }
})
$dots.on('click', 'li', function () {
    stopPlay()
    
    let $curIndex = $(this).index()
    // 3  0
    if ($curIndex > isPageIndex) {
        // 3 - 0 = 3
        // 3 1
        console.log($curIndex, isPageIndex)
        playNext($curIndex - isPageIndex)
        // 0 3
        // 1 3
    } else if ($curIndex < isPageIndex) {
        // 3 0  = 3

        console.log(isPageIndex, $curIndex)
        playPrevious(isPageIndex - $curIndex)
    }
})