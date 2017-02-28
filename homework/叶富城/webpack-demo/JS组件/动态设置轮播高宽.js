/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-22 17:09:03
 * @version $Id$
 */
        var set = (function(){
            function setWidth($ele){
                var windowW = window.screen.availWidth - 17;
                // var windowH = window.innerHeight;
                // var windowW = window.screen.availWidth;
                var windowH = window.screen.availHeight-54;
                var ele = $ele;
                ele.find('.warp').css({
                    height : windowH +'px',
                    width : windowW +'px'
                })
                ele.find('.Sliderimg-ct').css({
                    height : windowH +'px',
                    width :  windowW*8 + 'px'
                });
                ele.find('.Sliderimg-ct>li').each(function(){
                    $(this).css({
                        height : windowH + 'px',
                        width : windowW + 'px'
                    });
                });
                ele.find('.Sliderimg-ct>li>img').each(function(){
                    $(this).css({
                        height : windowH + 'px',
                        width : windowW + 'px'
                    });
                })
            }
            return {init : setWidth}
        })();

        module.exports = set;