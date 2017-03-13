/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/getInfo', function (req, res) {
	var currentIndex = parseInt(req.query.currentIndex) + 1;
	var arr = [];
	for (var i = currentIndex; i < (currentIndex + 4); i++) {
		arr.push('内容' + i);
	}
	res.send({
		status : 0,
		data : arr
	});
});


