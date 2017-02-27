//6.写一个函数isValidPassword(str), 判断用户输入的是不是合法密码（长度6-20个字符，只包括大写字母、小写字母、数字、下划线，且至少至少包括两种）
function isValidPassword(str){
	var patt = /(^[0-9]+$)|(^[A-Z]+$)|(^[a-z]+$)|(^_+$)/g;
	var pattNoWord = /\W/g;
	if(str.length < 6 || str.length > 20){
		return false;
	}
	if(patt.test(str)){
		return false;
	}
	if(pattNoWord.test(str)){
		return false;
	}
	return true;
}
isValidPassword("abcdef");