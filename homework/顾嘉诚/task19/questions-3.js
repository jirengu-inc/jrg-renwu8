//3.写一个函数获取n天前的日期
var lastWeek =  getLastNDays(7); // ‘2016-01-08’
var lastMonth = getLastNDays(30); //'2015-12-15'

function getLastNDays(days){
	var d = new Date();
	var date = new Date(d - days*24*60*60*1000);
	return date;
}