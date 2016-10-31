//3.如下代码的输出？为什么 （难度*）
    console.log(a);//变量提升
    var a = 1;
    console.log(b);
/*
    undefined
    b is not defined
*/ 
/*
    //上面的代码相当于
    var a;
    console.log(a);
    a=1;
    console.log(b);
*/