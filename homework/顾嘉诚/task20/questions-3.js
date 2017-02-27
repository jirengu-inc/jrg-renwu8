//3.写一个函数使用setTimeout模拟setInterval的功能
setTimeout(function sim(){
	setTimeout(sim(),10);
},10);

//或者

function sim(para){
	setTimeout(function(){
		sim();
	},para);
}