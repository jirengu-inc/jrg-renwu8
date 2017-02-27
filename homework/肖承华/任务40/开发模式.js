
//模块模式
var Student = (function(){
	var name = 'xianyu';
	function sayName(){
		alert(name);
	}
	function changeName(newName){
		name = newName;
	}
	return {
		sayName:sayName,
		changeName:changeName
	}
})();


//构造函数模式
function Person(name,age){
	this.name = name;
	this.age = age;
}
Person.prototype = {
	sayName: function(){
		console.log(this.name)
	},

	sayAge: function(){
		console.log(this.age)
	}
}

var me = new Person('xianyu',24)


//混合模式

function Person(name,age){
	this.name = name;
	this.age = age;
}
Person.prototype = {
	sayName: function(){
		console.log(this.name)
	},

	sayAge: function(){
		console.log(this.age)
	}
}

function Student(name,age,id){
	Person.call(this,name,age);
	this.id = id;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var student = new Student('xianyu',24,3251666 )


//发布订阅模式

var  eventCenter = {
  
  all:{},
  
  on:function(event,handler){
    if (eventCenter.all[event] === undefined) {
    	eventCenter.all[event] = [];
    }
    eventCenter.all[event].push(handler)
  },
  
  fire:function(event){
    var func = eventCenter.all[event];
    for(var i=0;i<func.length;i++){
      func[i]([].slice.call(arguments,1))
    }
  }
}



eventCenter.on('click',function(data){
  console.log(data)
})

eventCenter.fire('click','hello','world')


//工厂模式

function person(name,age){
    var p = {};
	p.name = name;
	p.age = age;
	p.sayName = function(){
		console.log(this.name)
	}

	return p
}

var student = person('xianyu',23)


//单例模式

var student = (function(){

	var instance;

	function Student(){

	}
	Student.prototype = {
		init:function(name,age,id){
			this.name = name;
			this.age = age;
			this.id = id;
		},
		sayName:function(){
			console.log(this.name)
		}
	}
	return {
		getInstance : function(){
			if (!student) {
				student = new Student()
			}
			return instance;
		}
	} 
})()

//事件管理
var EventManager = (function(){
	var events = {};

	function on(evt,handler){
		events[evt] = events[evt]||[];
        events[evt].push(handler); 
	}
	function fire(evt){
		if (!events[evt]) {
			console.log('未定义此事件');
			return 
		}
		for (var i = 0; i <events[evt].length; i++) {
			events[evt][i]([].slice.call(arguments,1))
		}
	}
	function off(evt){
		delete events[evt];
	}

	return {
		on: on,
		fire: fire,
		off: off
	}
})();

EventManager.on('text:change', function(val){
    console.log('text:change...  now val is ' + val);  
});
EventManager.fire('text:change', '饥人谷');
EventManager.off('text:change');


//写一个函数createTimer，用于创建计时器，创建的计时器可分别进行计时「新增」。
//ps: 1. 计时器内部写法参考前面的任务中Runtime的写法; 2. 体会工厂模式的用法
function createTimer(){
    var time = {};
    time.start = function(){
    	time.now = Date.now();
    }
    time.end = function(){
    	time.after = Date.now();
    }
    time.get = function(){
    	return time.after - time.now;
    }
    return time;
}

var timer1 = createTimer();
var timer2 = createTimer();
timer1.start();
for(var i=0;i<100;i++){
    console.log(i);
}
timer2.start();
for(var i=0;i<100;i++){
    console.log(i);
}
timer1.end();
timer2.end();
console.log(timer1.get());
console.log(timer2.get());


//封装一个曝光加载组件，能实现如下方式调用

//$target 是 jquery 对象
// 当窗口滚动时，如果$target 出现在可见区域，执行回调函数里面的代码，且在回调函数内，$(this)代表$target
Expouse.bind($target, function(){
    console.log($(this));    // $target
});

// 当窗口滚动时，如果$target 出现在可见区域，执行回调函数里面的代码，且在回调函数内，$(this)代表$target。 仅执行一次回调函数，下次$target 曝光不再执行
Expourse.one($target, function(){
    console.log($(this));    // $target
})


Expouse = (function(){
	var exposure = {
		bind:function(target,callback){
			if (exposure.isShow(target)) {
				callback.call(target)
			}
		},
		on:function(target,callback){
			var flag;
			if (exposure.isShow(target) && !flag) {
				callback.call(target);
				flag = true;
			}
			
		},
		isShow:function(node){
			var scrollTop = $(window).scrollTop(),
				nodeH = node.offset().top,
				windowH = $(window).height();
			if (scrollTop + windowH > nodeH ) {
				return true;
			}else{
				return false;
			}
		}
	}
})();