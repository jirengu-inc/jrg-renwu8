app.get('/getInfo', (req, res) => {
	let i = parseInt(req.query.index),
		size = parseInt(req.query.size),
		arr = [];
	for (let j = 0; j < size; j++) {
		arr.push('内容'+(i+j+1));
	}
	res.header("Access-Control-Allow-Origin", "*");
	res.send({
		status: 0,
		data: arr
	})
});