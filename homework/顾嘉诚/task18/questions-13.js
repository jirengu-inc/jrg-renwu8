//13.写一个函数，获取从min到max之间的随机整数，包括min不包括max （***）
function getInter(min,max){
	return Math.floor(Math.random()*(max-min)+min);
}

getInter(1,5);