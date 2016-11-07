//3.写一个find函数，实现下面的功能 （***）
var arr = [ "test", 2, 1.5, false ]
find(arr, "test") // 0
find(arr, 2) // 1
find(arr, 0) // -1

/*
function find(arr,val){
	return arr.indexOf(val);
}
*/
function find(arr,val){
	for(var i=0;i<arr.length;i++){
		if(arr[i] === val){
			return i;
		}
	}
	return -1;
}