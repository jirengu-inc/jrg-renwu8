/**
 * Created by fm on 2017/2/6.
 */
var Expourse={
    init:function ($target) {
        this.$target=$target;
        this.bind();
        this.checkShow();
    },
    bind:function () {
        var me=this,
            timer=null,
            interval=100;
        $(window).on("scroll",function (e) {
            timer&&clearTimeout(timer);
            timer=setTimeout(function () {
                me.checkShow();
            },interval);
        });
    },
    checkShow:function () {
        var me=this;
        this.$target.each(function () {
            var $cur=$(this);
            if(me.isShow($cur)){
                Dataopt.init();
            }
        })
    },
    isShow:function ($elem) {
        var srollHeight=$(window).scrollTop(),
            windowHeight=$(window).height(),
            elemTop=$elem.offset().top;
        if(srollHeight+windowHeight>elemTop){
            return true;
        }else{
            return false;
        }
    }
};