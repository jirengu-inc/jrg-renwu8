/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-24 11:19:30
 * @version $Id$
 */
    define(['jquery'],function($){
    var load = function(){
        var start = 0;
        $('.load-more').on('click',function(e){
            $.ajax({
                type: 'get',
                url: 'loadMore.php',
                dataType: 'json',
                data: {
                    start: start,
                    len: 3
                },
                success: function (json) {
                    if(json.length){
                        appendHtml(json);
                    }
                },
                error: function () {
                    console.log('load fail...');
                }
            });
        })
    }
    function appendHtml(data){
            var html = '';
            for(var i=0;i<data.length;i++){
                html += '<li>'+ '<img src="' + data[i][0] + '" alt="">';
                html += '<h4>' + data[i][1] +'</h4>';
                html += '</li>'
        }
            $('.content-warp').append(html);
            water.init()
             start += 3;
        }
    return {
        render : load
    }
    })