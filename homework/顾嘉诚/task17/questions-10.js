//10.如下代码的输出？为什么 （难度*****）
    var say = 0;
    (function say(n){
        console.log(n);
        if(n<3) return;
        say(n-1);
    }( 10 ));
    console.log(say);
/*结果为
    10
    9
    8
    7
    6
    5
    4
    3
    2
    0
*/
/*
    var say;
    (function say(n){//这个立即函数里面所有的东西，只能在内部访问到，它的外边无法访问
        console.log(n);
        if(n<3){
            return;
        }
        say(n-1);
    })(10)
    console.log(say);
*/