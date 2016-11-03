//14.写一个函数，获取从min到max之间的随机整数，包括min包括max （***）
function getInter(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

getInter(1,5);