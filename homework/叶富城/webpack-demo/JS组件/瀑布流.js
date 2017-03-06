/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-22 17:14:06
 * @version $Id$
 */
        let waterfall = (function(){
            function render(){

                var nodeWidth = $('main .highlight .content-warp>li').outerWidth(true),
                    colNum = parseInt($('main .highlight .content-warp').width()/nodeWidth),
                    colSumHeight = [];
                var maxHeight;    
                for(var i = 0; i<colNum;i++){
                    colSumHeight.push(0);
                }

                $('main .highlight .content-warp>li').each(function(){
                    var $cur = $(this);

                    //colSumHeight = [100, 250, 80, 200]

                    var idx = 0,
                        minSumHeight = colSumHeight[0];
                    for(var i=0;i<colSumHeight.length; i++){
                        if(colSumHeight[i] < minSumHeight){
                            idx = i;
                            minSumHeight = colSumHeight[i];
                        }
                    }
                    $cur.css({
                        left: nodeWidth*idx,
                        top: minSumHeight
                    });
                    colSumHeight[idx] = $cur.outerHeight(true) + colSumHeight[idx];
                });
                    maxHeight = Math.max.apply(this,colSumHeight);
                    $('main .highlight .content-warp').css({
                        height : maxHeight + 10 +'px'
                    });
            }
            return {
                init: render
            }

        })()

        module.exports = waterfall;