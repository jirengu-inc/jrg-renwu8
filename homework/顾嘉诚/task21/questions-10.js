//10.补全如下正则表达式
var re = /<[^<>]+>/g;
var str = '<> <a href="/"> <input type="radio" checked> <b>'
str.match(re) // '<a href="/">', '<input type="radio" checked>', '<b>'