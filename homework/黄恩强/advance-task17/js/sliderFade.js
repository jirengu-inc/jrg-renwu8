var $sliderContainer = $('.sliderContainer'),
    $imageContainer = $('.imageContainer'),
    $itme = $imageContainer.children(),
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

function play(curIndex) {
    if (isAnimateLock) return
    isAnimateLock = true
    console.log(isPageIndex, curIndex)
    $itme.eq(isPageIndex).fadeOut(2000)
    $itme.eq(curIndex).fadeIn(2000, function () {
        // buttonOrDot(length, move)
        // resetSlider()

        isPageIndex = curIndex
        setDot()
        isAnimateLock = false
    })
}

function playNext(index) {

    play((isPageIndex + 1) % sliderLenght)
}
function playPrevious(index) {

    play((sliderLenght + isPageIndex - 1) % sliderLenght)
}
function setDot() {
    $dots.children()
        .removeClass('active')
        .eq(isPageIndex)
        .addClass('active')

}
function autoPlay() {
    clock = setInterval(function () {
        playNext()
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
    console.log($curIndex)
    if ($curIndex === isPageIndex) return
    play($curIndex)
})