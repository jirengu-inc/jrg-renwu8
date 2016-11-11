//3.写一个函数 isEmail(str)，判断用户输入的是不是邮箱
function isEmail(str){
	var patt = /^\S+[@]{1,}\S+[.]\S+$/g;
	return patt.test(str);
}
isEmail("gu@163.com");