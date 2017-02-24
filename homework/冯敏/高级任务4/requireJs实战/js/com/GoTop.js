/**
 * Created by fm on 2017/2/18.
 */
define(["jquery"],function ($) {
    function GoTop(){
        this.init();
        this.bind();
    }
    GoTop.prototype={
        init:function () {
            var $goTop=$("<div id='goTop'> 回到顶部 </div>");
            $("body").append($goTop);
            $goTop.hide();
            this.$goTop=$goTop;
        },
        bind:function () {
            var me=this;
            $(window).on("scroll",function () {
                console.log(4);
                var scrollTop=$("body").scrollTop();
                if(scrollTop>100){
                    me.$goTop.show();
                }else{
                    me.$goTop.hide();
                }
            });
            me.$goTop.on("click",function () {
                $("body").scrollTop(0);
            })
        }
    };
    return  GoTop;
});