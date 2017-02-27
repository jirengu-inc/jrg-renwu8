//============CORS=======================
app.get('/more1',(req,res)=>{
	let firstNum = parseInt(req.query.curNum) + 1,
		arr = [];
	for (let i = 0; i < 5; i++) {
		arr.push("内容" + (firstNum + i));
	}
	res.header("Access-Control-Allow-Origin", "http://b.cl.com:8080"); 
	//res.header("Access-Control-Allow-Origin", "*"); //允许所有
	res.send(arr)
});

//============JSONP=======================
/**
 * 跨域：JSONP
 * 发送 GET 请求， 无参数
 * GET
 * 返回响应数据
 */
app.get('/more', (req, res) => {
	let cb = req.query.callback;
	let firstNum = parseInt(req.query.curNum) + 1,
		arr = [];
	for (let i = 0; i < 5; i++) {
		arr.push("内容" + (firstNum + i));
	}
	if (cb) {
		res.send(cb + '(' + JSON.stringify(arr) + ')');
	} else {
		res.send(arr)
	}
});


/**
 * 跨域：JSONP
 * 发送 POST 请求， 有参数
 * POST 
 * query = { curNum: "这是评论内容" }
 */
app.post('/more', (req, res) => {
	let cb = req.query.callback;
	let firstNum = parseInt(req.body.curNum) + 1,
		arr = [];
	for (let i = 0; i < 5; i++) {
		arr.push("内容" + (firstNum + i));
	}
	if (cb) {
		res.send(cb + '(' + JSON.stringify(arr) + ')');
	} else {
		res.send(arr);
	}
});