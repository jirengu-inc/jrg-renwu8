//9.如下代码的输出？为什么 （难度****）
    fn();
    var i = 10;
    var fn = 20;
    console.log(i);
    function fn(){
        console.log(i);
        var i = 99;
        fn2();
        console.log(i);
        function fn2(){
            i = 100;
        }
    }
/*结果为
    undefined
    100
    10
*/
/*
    //上面的代码等价于
    var i;
    var fn;
    function fn(){
        var i;
        function fn2(){
            i=100;
        }
        console.log(i);
        i = 99;
        fn2();//此时在全局变量中，i=100
        console.log(i);
    }
    fn();
    i = 10;
    fn = 20;
    console.log(i);
*/