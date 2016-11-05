//写一个json对象深拷贝的方法，json对象可以多层嵌套，值可以是字符串、数字、布尔、json对象中的任意项（
//PS:尝试另外一种方法 var obj2 = JSON.parse( JSON.stringify(obj1) ）
function jsonCopy(json){
	return JSON.parse(JSON.stringify(obj));
}
var obj = {
	"info":{
		"name":"xiaohong",
		"age":10
	},
	"sex":"female"
};
var obj1 = jsonCopy(obj);

function deepCopy(obj){
	var newObj = {};
	for(var prop in obj){
		if(typeof obj.prop === "object"){
			deepCopy(obj.prop);
		}else{
			newObj.prop = obj.prop;
		}
	}
	return newObj;
}