//7.如下代码的输出？为什么 （难度***）
    var fn = 1;
    function fn(fn){
         console.log(fn);
    }
    console.log(fn(fn));
/*结果为：报错
	fn is not a function
*/
/*
	//上述代码等价于
	var fn;
	function fn(fn){
		console.log(fn);
	}
	fn = 1;
	console.log(fn(fn));
*/