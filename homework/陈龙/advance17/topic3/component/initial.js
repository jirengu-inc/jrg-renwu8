import $ from '../../../jq';

//=========jquery控制逻辑代码=============
const getInitial = (DATA) => {
    const LEN = DATA.length, //图片个数
        $imgCt = $('.img-ct'), //图片父容器
        $arrowPre = $('.arrow-pre'), //左按钮
        $arrowNext = $('.arrow-next'), //右按钮
        $bullet = $('.bullet'), //小圆点父容器
        $imgs = $imgCt.children();

    let curPage = 0, //当前第几张图片
        isAnimate = false; //动画加锁

    const play = (n) => {
        if (isAnimate)
            return;
        isAnimate = true;
        let nextPage = curPage + n;
        if (nextPage < 0) {
            nextPage = LEN - 1;
        } else if (nextPage >= LEN) {
            nextPage = 0;
        }
        $bullet
            .children()
            .removeClass('active')
            .eq(nextPage)
            .addClass('active');
        $imgs.eq(curPage).fadeOut(500);
        $imgs.eq(nextPage).fadeIn(500, function () {
            curPage = nextPage;
            isAnimate = false;
        });
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
    setInterval(() => {
        play(1);
    }, 2000);
};

module.exports = getInitial;