/**
 * 使用范例
 */
app.get('/getNews1', function(req, res){

	var news = [
			'甘肃回应当地人组团到北京乞讨：采取措施劝返',
			'黑龙江东北虎林园：东北虎过冬“长胖”属正常',
			'云南高职学生称遭强制实习上夜班',
			'河南2名学生相继白血病去世 ',
			'被害女留学生异国生活：渴望被爱 8年来一直减肥',
			'辽宁一起“酒托”案18人被抓 6名酒托女被判刑'

		];

	var data = [];
	for(var i = 0; i < 3; i++){
		var index = parseInt(Math.random()*news.length);
		data.push(news[index]);
		}
		console.log(data);
	res.send({
		status: 0,
		data: data
	})
})
app.get('/getNews2', function(req, res){

	var news = [
			'甘肃回应当地人组团到北京乞讨：采取措施劝返',
			'黑龙江东北虎林园：东北虎过冬“长胖”属正常',
			'云南高职学生称遭强制实习上夜班',
			'河南2名学生相继白血病去世 ',
			'被害女留学生异国生活：渴望被爱 8年来一直减肥',
			'辽宁一起“酒托”案18人被抓 6名酒托女被判刑'

		];

	var Data = [];
	for(var i = 0; i < 3; i++){
		var index = parseInt(Math.random()*news.length);
		Data.push(news[index]);
		}
		var cb = req.query.callback;
	res.send(cb + '(' + JSON.stringify(Data) + ')');
})



/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
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