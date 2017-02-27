//进阶15-8
app.get('/getInfo', (req, res) => {
				let i = parseInt(req.query.index),
								size = parseInt(req.query.size),
								arr = [];
				if (i <= 20) {
								for (let j = 0; j < size; j++) {
												arr.push('内容' + (i + j + 1));
								}
				}

				res.header("Access-Control-Allow-Origin", "*");
				setTimeout(() => {
								res.send({status: 0, data: arr})
				}, 2000);
});

//进阶15-6(滚动底部自动获取新闻+懒加载) 数据
let news = [
				{
								link: 'http://view.inews.qq.com/a/20160830A02SEB00',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531730377_150120/0',
								title: '中国轰6K研发险些被俄罗斯发动机厂商卡脖子',
								brif: '近日，轰6K＂战神＂轰炸机首次公开亮相。在中国...'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '外媒称中国已经决心造出世界先进的航空发动机',
								brif: '资料图：2012年11月14日，第九届中国国际...'
				}, {
								link: 'http://view.inews.qq.com/a/20160828A007LB00',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531727868_150120/0',
								title: '传奇导弹专家冯·布劳恩：其实到美国后曾被当局忽视',
								brif: '小火箭出品本文作者：邢强博士原文标题：布劳恩博...'
				}, {
								link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
								title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
								brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '外媒称中国已经决心造出世界先进的航空发动机',
								brif: '资料图：2012年11月14日，第九届中国国际...'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
								brif: '嚣张（aggressive）这个词，腐国海军当...'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
								brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '中国武警2016年征兵宣传片震撼首发',
								brif: '中国武警2016年征兵宣传片震撼首发'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
								brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
								brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
				}, {
								link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
								title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
								brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '外媒称中国已经决心造出世界先进的航空发动机',
								brif: '资料图：2012年11月14日，第九届中国国际...'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
								brif: '嚣张（aggressive）这个词，腐国海军当...'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
								brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '中国武警2016年征兵宣传片震撼首发',
								brif: '中国武警2016年征兵宣传片震撼首发'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
								brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
								brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
				}, {
								link: 'http://view.inews.qq.com/a/20160830A02SEB00',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531730377_150120/0',
								title: '中国轰6K研发险些被俄罗斯发动机厂商卡脖子',
								brif: '近日，轰6K＂战神＂轰炸机首次公开亮相。在中国...'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '外媒称中国已经决心造出世界先进的航空发动机',
								brif: '资料图：2012年11月14日，第九届中国国际...'
				}, {
								link: 'http://view.inews.qq.com/a/20160828A007LB00',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531727868_150120/0',
								title: '传奇导弹专家冯·布劳恩：其实到美国后曾被当局忽视',
								brif: '小火箭出品本文作者：邢强博士原文标题：布劳恩博...'
				}, {
								link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
								title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
								brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '外媒称中国已经决心造出世界先进的航空发动机',
								brif: '资料图：2012年11月14日，第九届中国国际...'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
								brif: '嚣张（aggressive）这个词，腐国海军当...'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
								brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '中国武警2016年征兵宣传片震撼首发',
								brif: '中国武警2016年征兵宣传片震撼首发'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
								brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
								brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
				}, {
								link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
								title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
								brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '外媒称中国已经决心造出世界先进的航空发动机',
								brif: '资料图：2012年11月14日，第九届中国国际...'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
								brif: '嚣张（aggressive）这个词，腐国海军当...'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
								brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '中国武警2016年征兵宣传片震撼首发',
								brif: '中国武警2016年征兵宣传片震撼首发'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
								brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
				}, {
								link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
								img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
								title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
								brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
				}
]
//接口：一次发送3条新闻给客户端
app.get('/getNews', (req, res) => {
				let index = req.query.index,
								len = 3,
								arr = news.slice(index * len, index * len + len);
				res.header("Access-Control-Allow-Origin", "*");
				res.header("Access-Control-Allow-Origin", "*");
				setTimeout(() => {
								res.send({status: 0, data: arr});
				}, 1000);
});
