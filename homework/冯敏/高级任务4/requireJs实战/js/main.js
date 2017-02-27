/**
 * Created by fm on 2017/2/18.
 */
requirejs.config({
    baseUrl: "./js/com",
    paths: {
        'jquery': '../lib/jquery'
    }

});
requirejs(["GoTop","Carousel","WaterFall"],function (GoTop,Carousel,WaterFall) {
    // GoTop模块
    new GoTop();
    //  全屏轮播
    var $carousel_ct=$(".carousel");
    new Carousel($carousel_ct);

    var $waterfal_ct=$("#pic-ct");
    new WaterFall($waterfal_ct);
});