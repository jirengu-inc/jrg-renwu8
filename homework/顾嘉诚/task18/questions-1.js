//1.用 splice 实现 push、pop、shift、unshift方法 （***）
function pop(arr){
	return arr.splice(arr.length-1,1);
}

function  push(arr,val){
	var result;
	for(var i=1;i<arguments.length;i++){
		result = arr.splice(arr.length,0,arguments[i]);
	}
	return arr.length;
}

function shift(arr){
	return arr.splice(0,1);
}

function unshift(arr,val){
	var result;
	for(var i=arguments.length-1;i>0;i--){
		result = arr.splice(0,0,arguments[i]);
	}
	return arr.length;
}