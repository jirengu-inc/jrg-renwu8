import $ from '../../../jq';

//=========jquery控制逻辑代码=============
const getInitial = (DATA) => {
    const LEN = DATA.length, //图片个数
        $imgCt = $('.img-ct'), //图片父容器
        $arrowPre = $('.arrow-pre'), //左按钮
        $arrowNext = $('.arrow-next'), //右按钮
        $bullet = $('.bullet'), //小圆点父容器
        $firstImg = $('.img-ct>a').first(),
        $lastImg = $('.img-ct>a').last();

    let curPage = 0, //当前第几张图片
        imgWidth = $firstImg.width(), //图片宽度
        isAnimate = false; //动画加锁

    //前面添加末位图片，后面添加第一张图片
    $imgCt
        .prepend($lastImg.clone())
        .append($firstImg.clone());
    //改变图片父容器宽度,向右偏移一个图片的宽度
    $imgCt.width(imgWidth * $imgCt.children().length);
    $imgCt.css('left', -imgWidth);

    //下一张图片
    const playNext = (n = 1) => {
        if (isAnimate) 
            return;
        isAnimate = true;
        $imgCt.animate({
            left: '-=' + imgWidth* n
        }, function () {
            curPage += n;
            if (curPage >= LEN) {
                $imgCt.css('left', -imgWidth);
                curPage = 0;
            }
            $bullet
                .children()
                .removeClass('active')
                .eq(curPage)
                .addClass('active');
            isAnimate = false;
        })
    };

    //上一张
    const playPre = (n = 1) => {
        if (isAnimate) 
            return;
        isAnimate = true;
        $imgCt.animate({
            left: '+=' + imgWidth* n
        }, function () {
            curPage -= n;
            if (curPage < 0) {
                $imgCt.css('left', -imgWidth * LEN);
                curPage = LEN - 1;
            }
            $bullet
                .children()
                .removeClass('active')
                .eq(curPage)
                .addClass('active');
            isAnimate = false;
        })
    };

    const play = (n) => {
        if (n > 0) {
            playNext(n);
        } else if (n < 0) {
            playPre(-n);
        }
    }

    $arrowPre
        .on('click', function (e) {
            e.preventDefault();
            play(-1);
        });
    $arrowNext.on('click', function (e) {
        e.preventDefault();
        play(1);
    });
    $bullet
        .children()
        .on('click', function (e) {
            let index = $bullet
                .children()
                .index($(this));
            play(index - curPage);
        });
};

module.exports=getInitial;