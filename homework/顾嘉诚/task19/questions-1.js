//1.写一个函数getIntv，获取从当前时间到指定日期的间隔时间
var str = getIntv("2017-01-27");
console.log(str);  // 距除夕还有 20 天 15 小时 20 分 10 秒

function getIntv(str){
  var nowDate = new Date();
  var tagDate = Date.parse(str);
  var diff = (tagDate - nowDate)/1000;
  var days = Math.floor(diff/(24*60*60));
  var hours = Math.floor((diff-days*24*60*60)/(60*60));
  var mins = Math.floor((diff-days*24*60*60-hours*60*60)/60);
  var secs = Math.floor(diff-days*24*60*60-hours*60*60-mins*60);
  return "距除夕还有 "+ days +" 天 "+ hours +" 小时 "+ mins +" 分 "+ secs +" 秒";
}