//4.写一个函数filterNumeric，把数组 arr 中的数字过滤出来赋值给新数组newarr， 原数组arr不变 （****）
arr = ["a", "b", 1, 3, 5, "b", 2];
newarr = filterNumeric(arr);  //   [1,3,5,2]
/*
function filterNumeric(arr){
	var a=[];
	arr.map(function(ele){
		if(typeof ele === "number"){
			a.push(ele);
		}
	});
	return a;
}
*/
function filterNumeric(arr){
	var a=[];
	for(var i=0;i<arr.length;i++){
		if(typeof arr[i] === "number"){
			a.push(arr[i]);
		}
	}
	return a;
}