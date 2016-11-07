//2.使用闭包封装一个汽车对象，可以通过如下方式获取汽车状态
var Car =(function(){
	//__scope__:{speed:,x,x,x,x,x:function}
	//x,x,x,x,x[[]scope]=__scope__
	var speed=0;
	function setSpeed(para){
		speed = para;
	}
	function getSpeed(){
		return speed;
	}
	function accelerate(){
		speed = speed + 10;
	}
	function decelerate(){
		speed = speed - 10;
	}
	function getStatus(){
		if(speed) return 'running';
		else return 'stop';
	}
	return {
		setSpeed : setSpeed,
		getSpeed : getSpeed,
		accelerate : accelerate,
		decelerate : decelerate,
		getStatus : getStatus
	};
})();//todo;
Car.setSpeed(30);
Car.getSpeed(); //30
Car.accelerate();
Car.getSpeed(); //40;
Car.decelerate();
Car.decelerate();
Car.getSpeed(); //20
Car.getStatus(); // 'running';
Car.decelerate();
Car.decelerate();
Car.getStatus();  //'stop';
//Car.speed;  //error