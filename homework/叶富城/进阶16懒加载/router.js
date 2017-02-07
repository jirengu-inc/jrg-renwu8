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
        {
            link: 'http://view.inews.qq.com/a/20160830A02SEB00',
            img: 'http://inews.gtimg.com/newsapp_match/0/530686980/0',
            title: '中国轰6K研发险些被俄罗斯发动机厂商卡脖子',
            brif:  '近日，轰6K＂战神＂轰炸机首次公开亮相。在中国...'
        },
        {
            link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
            img: 'http://inews.gtimg.com/newsapp_match/0/531338035/0',
            title: '外媒称中国已经决心造出世界先进的航空发动机',
            brif: '资料图：2012年11月14日，第九届中国国际...'
        },
        {
            link: 'http://view.inews.qq.com/a/20160828A007LB00',
            img: 'http://inews.gtimg.com/newsapp_match/0/524519953/0',
            title: '传奇导弹专家冯·布劳恩：其实到美国后曾被当局忽视',
            brif: '小火箭出品本文作者：邢强博士原文标题：布劳恩博...'
        },
        {
            link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
            img: 'http://inews.gtimg.com/newsapp_match/0/531575098/0',
            title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
            brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
        },
        {
            link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
            img: 'http://inews.gtimg.com/newsapp_match/0/531338035/0',
            title: '外媒称中国已经决心造出世界先进的航空发动机',
            brif: '资料图：2012年11月14日，第九届中国国际...'
        },
        {
            link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
            img: 'http://bowenpress.com/wp-content/uploads/2015/07/69f7900eb5f899b4c31d104ef4a85c07',
            title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
            brif: '嚣张（aggressive）这个词，腐国海军当...'
        },
        {
            link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
            img: 'http://bowenpress.com/wp-content/uploads/2015/07/69f7900eb5f899b4c31d104ef4a85c07',
            title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
            brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
        },
        {
            link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
            img: 'https://4.bp.blogspot.com/-SYO7AH1Jy_M/VvdZSqztdII/AAAAAAAAJgg/Qm6Kf_n3Rw88JTzoAmj_Farf-8bHOY65Q/s1600/0%2B%25282%2529.png',
            title: '中国武警2016年征兵宣传片震撼首发',
            brif: '中国武警2016年征兵宣传片震撼首发'
        },
        {
            link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
            img: 'http://img1.gtimg.com/news/pics/hv1/230/35/1765/114778280.jpg',
            title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
            brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
        },
        {
            link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
            img: 'http://img1.gtimg.com/news/pics/hv1/230/35/1765/114778280.jpg',
            title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
            brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
        },
        {
            link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
            img: 'http://bowenpress.com/wp-content/uploads/2015/07/69f7900eb5f899b4c31d104ef4a85c07',
            title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
            brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
        },
        {
            link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
            img: 'http://bowenpress.com/wp-content/uploads/2015/07/69f7900eb5f899b4c31d104ef4a85c07',
            title: '外媒称中国已经决心造出世界先进的航空发动机',
            brif: '资料图：2012年11月14日，第九届中国国际...'
        },
        {
            link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
            img: 'https://tdmlifefocus.files.wordpress.com/2014/06/234612-130225010t180.jpg',
            title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
            brif: '嚣张（aggressive）这个词，腐国海军当...'
        },
        {
            link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
            img: 'http://www.cxdq.com/d1/img/081115/2008111514278263.jpg',
            title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
            brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
        },
        {
            link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
            img: 'https://tdmlifefocus.files.wordpress.com/2014/06/234612-130225010t180.jpg',
            title: '中国武警2016年征兵宣传片震撼首发',
            brif: '中国武警2016年征兵宣传片震撼首发'
        },
        {
            link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
            img: 'http://image2.sina.com.cn/jc/2004-07-04/U28P27T1D208324F26DT20040704091620.jpg',
            title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
            brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
        },
        {
            link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
            img: 'http://www.cxdq.com/d1/img/081115/2008111514278263.jpg',
            title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
            brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
        }

    ]

    var pageIndex = req.query.page;
    var len = 3;

    var retNews = 	news.slice(pageIndex*len, pageIndex*len+len); //0, 3;  3, 6


    res.send({
        status: 0,
        data: retNews
    });
});

app.get('/hello', function(req, res) {
	res.send({
		status: 0,
		msg: "hello 饥人谷"
	});
});


/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/user/:uid', function(req, res) {
	console.log(req.params.uid); //100
	console.log(req.query.name); // 'ruoyu'
	res.send({
		status: 1,
		errorMsg: "请先注册"
	});
});


/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */
app.post('/comment', function(req, res) {
	console.log(req.body.comment); // "这是评论内容"
	res.send({
		status: 0,
		data: {
			cid: 100,
			comment: "这是评论内容"
		}
	});
});



/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
app.get('/user', function(req, res) {
	res.render('user.ejs', {
		username: '饥人谷'
	});
});