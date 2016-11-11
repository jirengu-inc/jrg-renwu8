//8.下面代码输出什么? 为什么? 改写代码，让其输出hunger, world.
var str = 'hello  "hunger" , hello "world"';
var pat =  /".*"/g;
str.match(pat);
//输出为['"hunger" , hello "world"']
//因为现在是贪婪模式

var str = 'hello  "hunger" , hello "world"';
var patt = /".*?"/g;
str.match(patt);