/**
 * Created by fm on 2017/2/6.
 */
Dataopt={
    curPage:1,
    perPageCount:20,
    init:function(){
        this.getData(function (obj,data) {
             var $nodes=obj.renderData(data);
             Waterfall.render($nodes);
        });
    },
    getData:function (callback){
        var me=this;
        $.ajax({
            url: 'http://platform.sina.com.cn/slide/album_tech',
            type: 'get',
            dataType: 'jsonp',
            jsonp:"jsoncallback",
            data: {
                app_key: '1271687855',
                format:'json',
                size:'img',
                num: me.perPageCount,
                page: me.curPage
            },
            success: function(ret){
                if(ret.status.code == 0){
                    callback(me,ret.data);
                    me.curPage++;
                }
            }
        });

    },
    renderData:function (items) {
        var tpl = '';
        var $nodes;
        for(var i = 0;i<items.length;i++){
            tpl += '<li class="item">';
            tpl += ' <a href="#" class="link"><img src="' + items[i].img_url + '" alt=""></a>';
            tpl += ' <h4 class="header">'+ items[i].short_name +'</h4>';
            tpl += '<p class="desp">'+items[i].short_intro+'</p>';
            tpl += '</li>';
        }
        $nodes = $(tpl);
        $('#pic-ct').append($nodes);
        return $nodes;
    }
}