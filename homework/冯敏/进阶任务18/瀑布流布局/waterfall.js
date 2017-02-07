/**
 * Created by fm on 2017/2/6.
 */
var Waterfall={
    colHeightArr:[],
    init:function ($ct) {
        this.$ct=$ct;
        this.render();
        this.resize();
    },
    resize:function () {
        var me=this;
        $(window).on("resize",function () {
            me.render();
        })
    },
    render:function ($nodes) {
        var me=this;    //指向water这个对象
        this.$items=this.$ct.find(".item");
        if(this.$items.length==0) return;
        this.itemWidth=this.$items.outerWidth(true);
        this.$ct.width("auto");
        this.colNum = parseInt(this.$ct.width()/this.itemWidth);
        this.$ct.width(this.itemWidth*this.colNum);
        if(this.colHeightArr.length==0 || !$nodes){
            for(var i=0;i<this.colNum;i++){
                this.colHeightArr[i]=0;
            }
        }
        if($nodes){
            $nodes.each(function () {
                var $item=$(this);
                $item.find("img").on("load",function () {
                    me.placeItem($item);
                    me.$ct.height(Math.max.apply(null,me.colHeightArr));
                })
            })
        }
    },
    placeItem:function ($elem) {
        var $me=$elem,
            minHeightInfo=this.getMin(),
            idx=minHeightInfo.idx,
            minSumHeight=minHeightInfo.minSumHeight;
        $me.css({
            left:idx*this.itemWidth,
            top:minSumHeight
        })
        this.colHeightArr[idx]+=$me.outerHeight(true);
    },
    getMin:function () {
        var idx=0,
            minSumHeight=this.colHeightArr[0];
        for(var i=1;i<this.colHeightArr.length;i++){
            if(this.colHeightArr[i]<minSumHeight){
                idx=i;
                minSumHeight=this.colHeightArr[i];
            }
        }
        return{
            idx:idx,
            minSumHeight:minSumHeight
        }
    }
}