//5.楼梯有20级，每次走1级或是2级，从底走到顶一共有多少种走法？用代码（递归）实现
function getNum(stepNum){
	if(stepNum === 1){
		return 1;
	}else if(stepNum === 2){
		return 2;
	}else{
		return getNum(stepNum - 1) + getNum(stepNum - 2);
	}
}
getNum(20);//10946