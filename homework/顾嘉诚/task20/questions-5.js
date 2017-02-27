//5.下面这段代码输出结果是? 为什么?
var a = 1;
setTimeout(function(){
    a = 2;
    console.log(a);
}, 0);
var a ;
console.log(a);
a = 3;
console.log(a);
//输出结果为 
//1
//3
//2

/*
以上代码等价于
var a;
var a;
a = 1;
console.log(a);
a = 3;
console.log(a);
setTimeout(function(){
	a = 2;
	console.log(a);
},0);
*/