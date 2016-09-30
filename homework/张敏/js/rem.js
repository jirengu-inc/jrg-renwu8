/**
 * Created by zm on 2016/9/28.
 */
//获取屏幕像素比,1/屏幕像素比得到可变的动态像素比，可以根据移动端像素比的不同，缩放像素比倍数
var pixelRatio=1/window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale='+pixelRatio+',minimum-scale='+pixelRatio+',maximum-scale='+pixelRatio+'"></meta>')

//获取html节点
var html=document.getElementsByTagName('html')[0];
//获取屏幕宽度
var pageWidth=html.getBoundingClientRect().width;
//屏幕宽度/固定数值(这个值随意，但是最好是整数)=基准值
html.style.fontSize=pageWidth/16+'px';