
//JSONP
/*app.get('/getSomething',function(req , res){
	var products = [
    {
        img: 'pic1.jpg',
        name: '珂兰 黄金手 猴哥款',
        price: '￥405.00'
    },{
        img: 'pic2.jpg',
        name: '珂兰 黄金转运珠 猴哥款',
        price: '￥100.00'
    },{
        img: 'pic3.jpg',
        name: '珂兰 黄金手链 3D猴哥款',
        price: '￥45.00'
    }
];
	var backFn = req.query.callback;
	res.send(backFn+'('+JSON.stringify(products)+')');
})
*/






//CORS
app.get('/getSomething',function(req , res){
    var products = [
    {
        img: 'pic1.jpg',
        name: '珂兰 黄金手 猴哥款',
        price: '￥405.00'
    },{
        img: 'pic2.jpg',
        name: '珂兰 黄金转运珠 猴哥款',
        price: '￥100.00'
    },{
        img: 'pic3.jpg',
        name: '珂兰 黄金手链 3D猴哥款',
        price: '￥45.00'
    }
];
    res.header('Access-Control-Allow-Origin','*')
    res.send(JSON.stringify(products));
})









app.post('/postSomething',function(req , res){
	var products = [
    {
        img: 'pic1.jpg',
        name: '珂兰 黄金手 猴哥款',
        price: '￥405.00'
    },{
        img: 'pic2.jpg',
        name: '珂兰 黄金转运珠 猴哥款',
        price: '￥100.00'
    },{
        img: 'pic3.jpg',
        name: '珂兰 黄金手链 3D猴哥款',
        price: '￥45.00'
    }
];
	res.send('load('+products+')');
})












