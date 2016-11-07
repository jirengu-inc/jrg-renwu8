//5.对象obj有个className属性，里面的值为的是空格分割的字符串(和html元素的class特性类似)，写addClass、removeClass函数，有如下功能：(****)
var obj = {
  className: 'open menu'
}
addClass(obj, 'new') // obj.className='open menu new'
addClass(obj, 'open')  // 因为open已经存在，所以不会再次添加open
addClass(obj, 'me') // me不存在，所以 obj.className变为'open menu new me'
console.log(obj.className)  // "open menu new me"

removeClass(obj, 'open') // 去掉obj.className里面的 open，变成'menu new me'
removeClass(obj, 'blabla')  // 因为blabla不存在，所以此操作无任何影响

function addClass(obj,str){
	for(prop in obj){
		var arr=obj[prop].split(" ");
		if(arr.indexOf(str) === -1){
			arr.push(str);
			obj[prop]=arr.join(" ");
		}
		return obj[prop];
	}
}

function removeClass(obj,str){
	for(prop in obj){
		var arr=obj[prop].split(" ");
		if(arr.indexOf(str) !== -1){
			arr.splice(arr.indexOf(str),1);
			obj[prop]=arr.join(" ");
		}
		return obj[prop];
	}
}