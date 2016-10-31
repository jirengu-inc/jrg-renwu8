//4.如下代码的输出？为什么 （难度*）
    sayName('world');
    sayAge(10);
    function sayName(name){//函数声明会声明前置
        console.log('hello ', name);
    }
    var sayAge = function(age){//函数表达式不能声明前置
        console.log(age);
    };
/*
	hello world
	sayAge is not a function
*/
/*
	//上面的代码等价于
	function sayName(name){
        console.log('hello ', name);
    }
    sayName('world');
    sayAge(10);
    var sayAge = function(age){
        console.log(age);
    };
*/    