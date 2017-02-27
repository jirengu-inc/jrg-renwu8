//5.如下代码的输出？为什么 （难度**）
    function fn(){}//通过函数声明定义函数fn
    var fn = 3;//将3赋值给变量fn，此时的fn变为字符类型，不再是函数
    console.log(fn);//3
/*
	3
*／
/*
	//上面的代码相当于
	var fn;
	function fn(){}
	fn=3;
	console.log(fn);
*/