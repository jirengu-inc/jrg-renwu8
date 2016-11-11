//6.下面这段代码输出结果是? 为什么?
var flag = true;
setTimeout(function(){
    flag = false;
},0)
while(flag){}
console.log(flag);
//结果为没有输出

/*
	上面的代码等价于
	var flag;
	flag = true;
	while(flag){}//进入该语句后，变成了死循环
	console.log(flag);
	setTimeout(...);
*/