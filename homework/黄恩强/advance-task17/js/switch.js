$('body').append($("<script data-id='slider' src='./js/slider.js'></script>"))

$('.switchJavascript').on('click', function (e) {
    e.preventDefault()
    console.log('switch成功')
    var $script = $('script').last()
    if ($script.attr('data-id') === 'slider') {
        $script.remove()
        $('body').append($("<script data-id='sliderFade' src='./js/sliderFade.js'></script>"))
    }else{
        $script.remove()
        $('body').append($("<script data-id='slider' src='./js/slider.js'></script>"))
        stopPlay()
    }

})