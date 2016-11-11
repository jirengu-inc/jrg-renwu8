//4.写一个函数 isPhoneNum(str)，判断用户输入的是不是手机号
function isPhoneNum(str){
	var patt = /^1[3578]\d{9}$/g;
	return patt.test(str);
}
isPhoneNum('13910004567');