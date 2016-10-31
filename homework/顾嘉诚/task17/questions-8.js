//8.如下代码的输出？为什么 （难度**）
    //作用域
    console.log(j);
    console.log(i);
    for(var i=0; i<10; i++){
        var j = 100;
    }
    console.log(i);
    console.log(j);
/*结果为
	undefined
	undefined
	10
	10
*/
/*
	//上面的代码等价于
	var i;
	var j;
	console.log(j);
	console.log(i);
	for(var i=0;i<10;i++){//JS中，不会形成局部作用域
		var j=100;
	}
	console.log(i);//10
	console.log(j);//100
*/