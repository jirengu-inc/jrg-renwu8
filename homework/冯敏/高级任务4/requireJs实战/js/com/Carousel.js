/**
 * Created by fm on 2017/2/18.
 */
define(["jquery"],function ($) {
    function Carousel($container) {
        this.$ct=$container;
        this.init();
        this.bind();
    }
    Carousel.prototype={
        init:function () {
            this.$imgCt=this.$ct.find(".img-ct");
            this.$items=this.$imgCt.children();
            this.$pre=this.$ct.find(".pre");
            this.$next=this.$ct.find(".next");
            this.$bullet=this.$ct.find(".bullet");
            this.imgWidth=$(window).width();
            this.imgCount=this.$imgCt.children().length;
            this.$imgCt.prepend(this.$items.last().clone());
            this.$imgCt.append(this.$items.first().clone());
            this.$imgCt.find(".item").css('width',this.imgWidth);
            this.$imgCt.find(".cover").css('width',this.imgWidth);
            this.imgRealCount=this.$imgCt.children().length;
            this.$imgCt.css({
                left:0-this.imgWidth,
                width:this.imgRealCount*this.imgWidth
            });
            this.curIdx=0;
            this.isAnimate=false;
        },
        bind:function () {
            this.setBg(1);
            this.autoPlay();
            this.addEvent();
        },
        setBg:function (idx) {
            var idx=idx||0,
                $node=this.$imgCt.children().eq(idx),
                $cover=$node.find(".cover"),
                imgUrl=$cover.attr("data-bg-img");
            if ($node.data("isBgSet")) return;
            $cover.css("background-image","url("+imgUrl+")");
            $node.data("isBgSet",true);
        },
        autoPlay:function () {
            var _this=this;
            clock=setInterval(function(){
                _this.playNext();
            },2000);
        },
        playNext:function (idx) {
            var idx=idx || 1,
                _this=this;
            var imgCount=this.imgCount,
                imgRealCount=this.imgRealCount,
                imgWidth=this.imgWidth;
            if(!this.isAnimate){
                this.isAnimate=true;
                this.setBg((this.curIdx+idx+1)%imgRealCount);
                this.$imgCt.animate({left:"-="+(idx*imgWidth)},function () {
                    _this.curIdx=(_this.curIdx+idx)%imgCount;
                    if(_this.curIdx==0){
                        _this.$imgCt.css("left",0-imgWidth);
                    }
                    _this.isAnimate=false;
                    _this.setBullet();
                })
            }
        },
        playPre:function (idx) {
            var idx=idx || 1,
                _this=this;
            var imgCount=this.imgCount,
                imgWidth=this.imgWidth;
            if (!this.isAnimate){
                this.isAnimate=true;
                this.setBg(this.curIdx-idx+1);
                this.$imgCt.animate({left:"+="+(idx*imgWidth)},function () {
                    _this.curIdx=(_this.curIdx-idx+imgCount)%imgCount;
                    if(_this.curIdx==(imgCount-1)){
                        _this.$imgCt.css("left",0-imgCount*imgWidth);
                    }
                    _this.isAnimate=false;
                    _this.setBullet();
                })
            }
        },
        setBullet:function () {
            this.$bullet.find("li").removeClass("active").eq(this.curIdx).addClass("active");
        },
        addEvent:function () {
            var _this=this;
            this.$next.on("click",function () {
                _this.playNext();
            });
            this.$pre.on("click",function () {
                _this.playPre();
            });
            _this.$bullet.find("li").on("click",function () {
                var idx=$(this).index();
                if(idx>_this.curIdx){
                    _this.playNext(idx-_this.curIdx);
                }else if(idx<_this.curIdx){
                    _this.playPre(_this.curIdx-idx);
                }
            })
        }
    };
    return Carousel;
});