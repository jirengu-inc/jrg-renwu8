//4.写一个函数，计算setTimeout平均[备注：新加]最小时间粒度
var start;
var end;
function cctTime(){
	start = Date.now();
	var i = 0;
	var clock = setTimeout(function(){
		i ++;
		if(i === 1000){
			end = Date.now();
			console.log((end - start)/1000);
		}else
		setTimeout(arguments.callee,1);
	},1);
}
cctTime();//4.539