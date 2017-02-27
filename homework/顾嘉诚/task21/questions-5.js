//5.写一个函数 isValidUsername(str)，判断用户输入的是不是合法的用户名（长度6-20个字符，只能包括字母、数字、下划线）
function isValidUsername(str){
	var patt = /^\w{6,20}$/;
	return patt.test(str);
}
isValidUsername("sda0sfdfe");