//7.下面这段代码输出？如何输出delayer: 0, delayer:1...（使用闭包来实现）
for(var i=0;i<5;i++){
    setTimeout(function(){
         console.log('delayer:' + i );
    }, 0);
    console.log(i);
}
//输出结果为
//0
//1
//2
//3
//4
//delayer:5

/*
	//上述代码相当于
	var i = 0;

	console.log(i);
	//1------------
	i ++;//i = 1
	i < 5;
	console.log(i);
	//2------------
	i ++;//i = 2
	i < 5;
	console.log(i);
	//3------------
	i ++;//i = 3
	i < 5;
	console.log(i);
	//4------------
	i ++;//i = 4;
	i < 5;
	console.log(i);
	//5------------
	i ++;
	i === 5;
	console.log('delayer:' + i );
	console.log('delayer:' + i );
	console.log('delayer:' + i );
	console.log('delayer:' + i );
	console.log('delayer:' + i );
*/ 

(function (){
	for(var i = 0;i < 5;i ++){
		(function(){
			var n = i;
			setTimeout(function(){
				console.log("delayer:" + n);
			},0);
		})();
	}
})()