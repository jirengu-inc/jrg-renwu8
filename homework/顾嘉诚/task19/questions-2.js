//2.把数字日期改成中文日期
var str = getChsDate('2015-11-28');
console.log(str);  // 二零一五年一月八日

function getChsDate(str){
	var d = new Date(str);
	var year = d.getFullYear();
	var month = d.getMonth()+1;
	var date = d.getDate();
	var CHAR = ["零","一","二","三","四","五","六","七","八","九","十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四", "二十五", "二十六",  "二十七", "二十八", "二十九", "三十", "三十一"];
	return CHAR[year.toString()[0]]+CHAR[year.toString()[1]]+CHAR[year.toString()[2]]+CHAR[year.toString()[3]]+'年'+CHAR[month]+'月'+CHAR[date]+'日';
}