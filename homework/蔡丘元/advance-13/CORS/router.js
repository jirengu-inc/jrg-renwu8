/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/getNews', function(req, res) {
    var news = [
        "浙江火灾为何伤亡大？事发时正搞18元洗脚促销新疆全面取消农村义务工",
        "受基层干部群众称赞精神科医生带64名患者出走",
        "院方回应称系擅自离岗山西官员疑因“保护小三当街打老婆”被停职陕西镇干部春节前失联2日",
        " 被发现在办公室死亡浙江警方查获身体藏毒嫌犯",
        " 2人排出129包海洛因女白领春节每晚追剧追到凌晨3点",
        "眼中长满结石警方通报大理客栈老板猥亵女客人：嫌犯行拘10日母亲搀扶老人儿子怕被讹拍视频取证",
        "母亲：没事的海归女结婚第四天丈夫举债 两月“被负债”500万",
        "大屏看鬼吹灯 云视听极光新用户还有会员免费领"
    ];
    var data = [];
    for (var i = 0; i < 3; i++) {
        var index = parseInt(Math.random() * news.length);
        data.push(news[index]);
        news.splice(index, 1);
    }
    res.header('Access-Control-Allow-Origin', 'http://a.jrg.com:8080');
    res.send(data);
})
