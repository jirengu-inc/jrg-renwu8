//5.遍历 JSON, 打印里面的值 （难度**）
var obj = {
  name: 'hunger',
  sex: 'male',
  age: 28
}
for(prop in obj){
	console.log(prop +":"+ obj[prop]);
}
//对对象使用for in 表示的是对象中的属性，属性对应的值通过obj[prop]表示