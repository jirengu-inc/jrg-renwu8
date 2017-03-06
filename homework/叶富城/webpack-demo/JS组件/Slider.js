/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-19 14:30:35
 * @version $Id$
 */

    let setSlider = (function(){
           var slider = function($ct){
                this.$ct = $ct;
                this.init();
                this.bind();
                this.playAuto();
            }

            slider.prototype = {
                init : function(){
                    this.imgCt = this.$ct.find('.Sliderimg-ct');
                    this.img = this.$ct.find('.Sliderimg-ct>li');
                    this.imgWidth = this.img.eq(0).width();
                    this.imgNum = this.img.length;
                    this.preBtn = this.$ct.find('.pre-btn');
                    this.nextBtn = this.$ct.find('.next-btn');
                    this.sImgWarp = this.$ct.find('.smallimg-ct .border-ct');
                    this.index = 0;
                    this.stopKey = null;
                    this.isSport = false;
                    this.sImg = this.$ct.find('.smallimg-ct>li>img');
                    this.sImgLi = this.$ct.find('.smallimg-ct>li');
                    this.fristImg = this.img.eq(0);
                    this.LastImg = this.img.eq(5);
                    this.imgCt.prepend(this.LastImg.clone());
                    this.imgCt.append(this.fristImg.clone());
                    this.imgCt.css({
                        'left': '-'+this.imgWidth+'px'
                })
                },

                bind : function(){
                    var _this = this;
                        this.nextBtn.on('click',function () {
                            if(_this.stopKey){
                                clearInterval(_this.stopKey)
                            }
                            if(!_this.isSport){
                                _this.playNext();
                                _this.playAuto();
                            }
                        })
                        this.preBtn.on('click',function () {
                            if(_this.stopKey){
                                clearInterval(_this.stopKey)
                            }
                            if(!_this.isSport){
                                _this.playPre();
                                _this.playAuto();
                            }
                        })
                        this.sImg.on('click',function (e) {
                            if(_this.stopKey){
                                clearInterval(_this.stopKey)
                            }
                            if(!_this.isSport){
                                _this.clickSImg($(e.target))
                                _this.playAuto();
                            }
                        })
                },

                playNext : function(){
                    var _this = this;
                    if(!this.isSport){
                        this.isSport = true;
                        if(this.index === this.imgNum-1){
                            this.imgCt.animate({left :'-='+this.imgWidth + 'px'},function(){
                                _this.imgCt.css({'left' : '-'+_this.imgWidth+'px'});
                            })
                            this.index = 0;

                        }else{
                            this.imgCt.animate({left :'-='+this.imgWidth + 'px'},function(){
                            });
                            this.index++;
                        }
                    }
                    this.sImgLi.removeClass('active');
                    this.sImgLi.eq(this.index).addClass('active');
                    this.sImgWarp.animate({
                        left : (128*this.index)+'px'
                    },function(){
                        _this.isSport = false;
                    });
                },

                playPre :function(){
                    var _this = this;
                    if(!this.isSport){
                        this.isSport = true;
                        if(this.index === 0){
                            this.imgCt.animate({left : '+='+this.imgWidth + 'px'},function(){
                                _this.imgCt.css({
                                    'left' : '-'+(_this.imgWidth*_this.imgNum)+'px'
                                });
                            })
                            this.index = this.imgNum-1;
                        }else{
                            this.imgCt.animate({left :'+='+this.imgWidth + 'px'},function(){
                            });
                            this.index--;
                        }
                    }
                    this.sImgLi.removeClass('active');
                    this.sImgLi.eq(this.index).addClass('active');
                    this.sImgWarp.animate({
                        left : (128*this.index)+'px'
                    },function(){
                        _this.isSport = false;
                    });
                },

                clickSImg : function (ele) {
                    var _this = this;
                    this.isSport = true;
                    var index = this.sImg.index($(ele));
                    this.sImgLi.removeClass('active');
                    this.imgCt.animate({
                        left : '-'+((index+1)*this.imgWidth)+'px'
                    },function (){
                        _this.index = index;
                        _this.sImgLi.eq(index).addClass('active');
                    })
                    this.sImgWarp.animate({
                        left : (128*index)+'px'
                    },function () {
                        _this.isSport = false;
                    });
                },

                playAuto : function () {
                    var _this = this;
                    this.stopKey = setInterval(function () {
                        _this.playNext()
                    },3000)
                }
            }
            return {
                create : function($ct){
                    new slider($ct)
                }
            }
    })()

    module.exports = setSlider;