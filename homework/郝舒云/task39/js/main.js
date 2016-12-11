requirejs(['jquery','app/GoTop','app/WaterFall','app/Exposure','app/carousel'],function($,GoTop,WaterFall,Exposure,Carousel){
    var top1 = new GoTop();
    var $node1 = $('#header-bg');
    var carousel = new Carousel($node1);
    carousel.bindEvent();
    var $btn = $('#loadmore');
    var $node = $('.pics ul');
    var waterfall = new WaterFall($node, $btn);
    waterfall.bindEvent();
    var imglist = $('.aboutlist');
    var leftpara = $('.leftpara');
    var rightpara = $('.rightpara');

 


       var expore1 = new Exposure(imglist, 'a');
    var expore2 = new Exposure(leftpara, 'div');
   var expore3 = new Exposure(rightpara, 'div');
});