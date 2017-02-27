define([],function(){
function Carouse($ct){
	this.$ct = $ct;
	this.render();
	this.init();
}
Carouse.prototype.render = function(){
	var html = '';
	html+='<ul class="img-ct">';
	html+='<li data-index="0"><a href=""><img src="img/llj1.jpg"></a></li>';
	html+='<li data-index="0"><a href=""><img src="img/llj2.jpg"></a></li>';
	html+='<li data-index="0"><a href=""><img src="img/llj3.jpg"></a></li>';
	html+='<li data-index="0"><a href=""><img src="img/llj4.jpg"></a></li>';
	html+='</ul>';
	html+='<a href="" class="btn btn-pre">&lt</a>';
	html+='<a href="" class="btn btn-next">&gt</a>';
	html+='<ul class="bullet clearfix">';
	html+='<li></li>';
	html+='<li></li>';
	html+='<li></li>';
	html+='<li></li>';
	html+='</ul>';
	this.$ct.html(html);
}
Carouse.prototype.init = function(){
	this.$imgCt = this.$ct.find('.img-ct');
	this.$preBtn = this.$ct.find('.btn-pre');
	this.$nextBtn = this.$ct.find('.btn-next');
	this.$bullet = this.$ct.find('.bullet');
	this.curPage = 0;
	this.imgLength = this.$imgCt.children().length;
	this.isAnimate = false;
	_this = this;

    this.$imgCt.prepend(this.$imgCt.find('li').last().clone());
	this.$imgCt.append(this.$imgCt.find('li').eq(1).clone());
	this.$ct.find('img').css('width',this.$ct.css('width'));
	this.$ct.find('img').css('height',this.$ct.css('height'));
	this.$imgCt.css('left','-' + this.$ct.width() + 'px');
	this.$ct.find('.btn-pre').css('left','10px');
	this.$ct.find('.btn-next').css('left',(this.$ct.width() - 40) + 'px');
	this.$ct.find('.bullet').css('left',(this.$ct.width()/2 - 42) + 'px');
	this.setBullet();
    this.$preBtn.on('click',function(e){
    	e.preventDefault();
    	_this.playPre();
    });
    this.$nextBtn.on('click',function(e){
    	e.preventDefault();
    	_this.playNext();
    });
}
Carouse.prototype.playNext = function(){
	var _this = this;
	if(this.isAnimate === true){
		return;
	}
	this.isAnimate = true;
	this.$imgCt.animate({
		left: '-=' + _this.$ct.width()
	},function(){
		_this.curPage++;
		if (_this.curPage === _this.imgLength) {
			_this.$imgCt.css('left','-' + _this.$ct.width() + 'px');
			_this.curPage = 0;
		}
		_this.isAnimate = false;
		_this.setBullet();
	});
}

Carouse.prototype.playPre = function(){
	var _this = this;
	if(this.isAnimate === true){
		return;
	}
	this.isAnimate = true;
	this.$imgCt.animate({
		left: '+=' + _this.$ct.width()
	},function(){
		_this.curPage--;
		if (_this.curPage === -1) {
			_this.$imgCt.css('left',-(_this.imgLength)*_this.$imgCt.find('li').first().width());
			_this.curPage = 3;
		}
		_this.isAnimate = false;
		_this.setBullet();
	});
}
Carouse.prototype.setBullet = function(){
	this.$bullet.children().removeClass('active').eq(this.curPage).addClass('active');
}
return function init($target){
	new Carouse($target);
}
});