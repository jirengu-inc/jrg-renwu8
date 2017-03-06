requirejs.config({
	baseUrl: 'js',
	paths: {
		jquery: 'jquery',
		carouse: 'carouse',
		waterfall: 'waterfall',
		totop: 'totop'
	}
});
requirejs(['jquery','carouse','waterfall','totop'],function($,carouse,waterfall,totop){
	carouse($('.carousel'));
waterfall.init($('.waterfall'),410);
var attr = ['img/portfolio/roundicons.png','img/portfolio/treehouse.png','img/portfolio/startup-framework.png','img/portfolio/golden.png','img/portfolio/escape.png','img/llj3.jpg','img/llj1.jpg','img/llj2.jpg','img/llj4.jpg'];
function appendHtml(attr){
$.each(attr,function(index,value){
    var html = '';
    html+='<div class="item">';
    html+='<div>';
    html+='<div class="bg"><i class="fa fa-plus fa-3x"></i></div>';
    html+='<img src = "' + value + '">';
    html+='</div>';
    html+='<h4>Round Icons</h4>';
    html+='<p>Graphic Design</p>';
    html+='</div>';
    var $html = $(html);
    $html.find('img')[0].onload = function(){
    	this.width = 400;
    	waterfall.render($html);
    };
});
}
appendHtml.call(undefined,attr);
$('.load-more').on('click',function(){
	$.get('/hello').done(function(ret){
		appendHtml(ret);
  	});
});
totop($('body'));
});