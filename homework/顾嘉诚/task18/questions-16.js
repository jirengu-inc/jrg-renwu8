//16.写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。
function getRandStr(len){
  var str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";//[0,10+26+26=62]
  var arr=str.split("");
  var a=[];
  for(var i=0;i<len;i++){
  	a.push(arr[Math.floor(Math.random()*str.length)]);
  }
  return a.join("");
}
var str = getRandStr(10); // 0a3iJiRZap
/*
function getRandStr(len){
	var STR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";//[0,10+26+26=62]
	var s="";
	for(var i=0;i<len;i++){
		s+=STR[Math.floor(Math.random()*STR.length)];
	}
	return s;
}
*/