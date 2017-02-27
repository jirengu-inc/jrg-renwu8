//12.写一个函数 truncate(str, maxlength), 如果str的长度大于maxlength，会把str截断到maxlength长，并加上...，如 （****）
truncate("hello, this is hunger valley,", 10) == "hello, thi...";
truncate("hello world", 20) == "hello world"

function truncate(str,maxlength){
	if(str.length>maxlength){
		var s=str.substr(0,maxlength)+"...";
		return s;
	}
	else return str;
}