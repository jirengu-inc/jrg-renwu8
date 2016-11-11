//9.补全如下正则表达式，输出字符串中的注释内容. (可尝试使用贪婪模式和非贪婪模式两种方法)
//非贪婪模式：
str = '.. <!-- My -- comment \n test --> ..  <!----> .. '
re = /<!--[\w\W]*?-->/g;
str.match(re)     // '<!-- My -- comment \n test -->', '<!---->'

//贪婪模式：
str = '.. <!-- My -- comment \n test --> ..  <!----> .. '
re = /<!--[^>]*-->/g;    // ^出现在中括号的首部是“非”的意思
str.match(re)     // '<!-- My -- comment \n test -->', '<!---->'