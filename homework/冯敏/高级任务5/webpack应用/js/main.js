/**
 * Created by fm on 2017/2/18.
 */
var GoTop=require("./GoTop.js");
var Carousel=require("./Carousel.js");
var WaterFall=require("./WaterFall.js");


new GoTop();

var $carousel_ct=$(".carousel");
new Carousel($carousel_ct);

var $waterfal_ct=$("#pic-ct");
new WaterFall($waterfal_ct);


