//  1. 首屏大图为全屏轮播
//  2. 有回到顶部功能
//  3. 图片区使用瀑布流布局（图片高度不一），下部有加载更多按钮，点击加载更多会加载更多数据(数据在后端 mock)
//  4.  使用 r.js 打包应用
define(['./nav', './shrink', './slider', './gotop', './waterfall'], function (nav, shrink, slider, gotop, waterfall) {
    shrink.open($('.navbar'))
    nav.open($('.navbar .nav'))
    slider.open($('.slider-module'))
    gotop.open($('.gotop'))
    waterfall.open($('.load-more-button'), $('#portfolio .works'))
});