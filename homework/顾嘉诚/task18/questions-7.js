//7.如下代码输出什么？为什么? (***)
arr = ["a", "b"];
/*
	["a","b"]
	因为不通过var定义一个变量，直接给一个变量赋值，那么这个对象相当于是window的属性
*/

arr.push( function() { alert(console.log('hello hunger valley')) } );
/*
	3
	因为arr.push()返回的是执行 .push() 后的数组的长度。
*/
arr[arr.length-1]()  // ?
/*
	'hello hunger valley'
	（弹出）undefined
*/