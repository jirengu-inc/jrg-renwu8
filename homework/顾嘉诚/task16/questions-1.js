/*
## 1.完成如下代码判断一个变量是否是数字、字符串、布尔、函数 （难度*）
ps: 做完后可参考 underscore.js 源码中部分实现
*/
function isNumber(el){
    if(typeof el === "number"){
    	return true;
    }else{
    	return false;
    }
}
function isString(el){
    if(typeof el === "string"){
    	return true;
    }else{
    	return false;
    }
}
function isBoolean(el){
    if(typeof el === "boolean"){
    	return true;
    }else{
    	return false;
    }
}
function isFunction(el){
    if(typeof el === "function"){
    	return true;
    }else{
    	return false;
    }
}

var a = 2,
    b = "jirengu",
    c = false;
alert( isNumber(a) );  //true
alert( isString(a) );  //false
alert( isString(b) );  //true
alert( isBoolean(c) ); //true
alert( isFunction(a)); //false
alert( isFunction( isNumber ) ); //true