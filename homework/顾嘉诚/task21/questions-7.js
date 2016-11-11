//7.写一个正则表达式，得到如下字符串里所有的颜色（#121212）
var re = /#[a-fA-F0-9]{6}/g;

var subj = "color: #121212; background-color: #AA00ef; width: 12px; bad-colors: f#fd0dee #fd2 "

alert( subj.match(re) )  // #121212,#AA00ef