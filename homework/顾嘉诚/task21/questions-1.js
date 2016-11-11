//1.写一个函数 trim(str)，去除字符串两边的空白字符
function trim(str){
	var pattHead = /^\s+/g;
	var pattTail = /\s+$/g;
	return str.replace(pattHead,"").replace(pattTail,"");
}
var str = "123   321    "
trim(str)