//14.写一个函数，获取一个随机数组，数组中元素为长度为len，最小值为min，最大值为max(包括)的随机整数 （***）
function randArr(len,max,min){
	var arr=[];
	for(var i=0;i<len;i++){
		arr.push(Math.floor(Math.random()*(max-min+1)+min));
	}
	return arr;
}
randArr(5,5,1);