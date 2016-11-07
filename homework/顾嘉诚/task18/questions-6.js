//6.写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串，如 (***)
camelize("background-color") == 'backgroundColor'
camelize("list-style-image") == 'listStyleImage'

function camelize(str){
	var arr=str.split("-");
	arr.forEach(function(e,i,a){
		if(i>0){
			e=e.replace(e[0],e[0].toUpperCase());
		}
		a[i]=e;
	});
	return arr.join("");
}