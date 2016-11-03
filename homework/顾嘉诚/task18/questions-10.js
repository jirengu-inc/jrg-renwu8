//10.写一个 filter(arr, func) 函数用于过滤数组，接受两个参数，第一个是要处理的数组，第二个参数是回调函数(回调函数遍历接受每一个数组元素，
//当函数返回true时保留该元素，否则删除该元素)。实现如下功能： （****）
function isNumeric (el){
    return (typeof el) === 'number';
}
arr = ["a",3,4,true, -1, 2, "b"]

arr = filter(arr, isNumeric); // arr = [3,4,-1, 2],  过滤出数字
arr = filter(arr, function(val) { return  (typeof val) === "number" && val > 0 });  // arr = [3,4,2] 过滤出大于0的整数

function filter(arr,func){
	 for(var i=0;i<arr.length;i++){
	 	if(!func(arr[i])){
	 		arr.splice(i,1);
	 	}
	 }
	 return arr;
}