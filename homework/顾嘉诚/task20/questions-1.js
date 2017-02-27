//1.下面的代码输出多少？修改代码让fnArr[i]() 输出 i。使用两种以上的方法
    var fnArr = [];
    for (var i = 0; i < 10; i ++) {
        fnArr[i] =  function(){
            return i;
        };
    }
    console.log( fnArr[3]() );  //输出10。因为fnArr = [function(){return i;}x10]

方法一
    //__scope__:{fnArr:array,i:0,function1:function}
    //function1[[scope]]=__scope__
    var fnArr = [];
    for(var i = 0;i < 10;i ++){
    	fnArr[i] = (function(num){
    		//__scope__:{num:,function2:function}
    		return function(){
    			//__scope__={}
    			return num;
    		}
    	})(i);
    }
    console.log( fnArr[3]() );

方法二
	//__scope__:{fnArr:array,i:0,function1:function}
    //function1[[scope]]=__scope__
    var fnArr = [];
    for(var i = 0;i < 10;i ++){
    	(function(num){
    		//__scope__:{num:,function2:function}
    		fnArr[i] = function(){
    			return num;
    		}
    	})(i);
    }
    console.log( fnArr[3]() );
