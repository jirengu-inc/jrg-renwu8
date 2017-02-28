/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-24 14:59:25
 * @version $Id$
 */

        require('../CSS/CSS原始文件.css');

        let set = require('./动态设置轮播高宽.js');
        set.init($('.slider'));

        let setSlider = require('./Slider.js');
        setSlider.create($('.slider'));

        let lazy = require('./JQ曝光组件.js');

        lazy.init($('main .history .timeline>li>.timeline-img>img'),function(node){
             var imgUrl = node.attr('data-src');
             node.attr('src', imgUrl);       
             })//懒加载

        lazy.init($('main .honor-ct .honor>li>img'),function(node){
             var imgUrl = node.attr('data-src');
             node.attr('src', imgUrl);       
             })//懒加载

        lazy.init($('main .teammate>li>img'),function(node){
             var imgUrl = node.attr('data-src');
             node.attr('src', imgUrl);       
             })//懒加载

        let waterfall = require('./瀑布流.js');

        waterfall.init();

        let goTop = require('./gotop.js');
        new goTop(document.querySelector('.goTop'))