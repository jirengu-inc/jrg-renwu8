//4.完善如下代码，用于获取执行时间如：
var Runtime = (function(){
    //code here ...
    var obj = {
        start: function(){
              startTime = Date.now();
              return startTime;
        },
        end: function(){
             endTime = Date.now();
             return endTime;
        },
        get: function(){
        	console.log(endTime);
        	console.log(startTime);
	         return	endTime-startTime;
        }
    };
return obj;
}());
Runtime.start();
for(var i=0;i<10000;i++){
	console.log(1);
}
Runtime.end();
console.log(  Runtime.get() );