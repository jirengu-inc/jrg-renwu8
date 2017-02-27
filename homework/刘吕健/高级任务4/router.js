var imgs = ['img/llj4.jpg','img/llj5.jpg','img/llj6.jpg','img/llj7.jpg','img/llj8.jpg','img/llj9.jpg','img/llj10.jpg','img/llj11.png','img/llj12.jpg','img/llj13.jpg','img/llj14.png','img/llj15.jpeg','img/llj16.jpg'];
var curIdx = 0;
app.get('/hello', function(req, res) {
	var resDate = [];
	for(var i=curIdx;i<curIdx+3;i++){
		resDate.push(imgs[i]);
	}
	curIdx+=3;
	res.send(resDate);
});