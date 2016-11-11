
	//正则匹配
	var regexps={
		isValidPassword:function(str){ //大小写字母 数字 下划线 任意两种的密码组合
		    var pattern=/^(\w{6,15})$/i;
		    var digit=/[0-9]+/;
		    var upper=/[a-z]+/;
		    var lower=/[A-Z]+/;
		    var line=/[_]+/;
		    if (pattern.test(str)&&-2<=(str.search(digit)+str.search(upper)+str.search(lower)+str.search(line))) {
		        return true
		    }else{
		        return false
		    }
		},
		isValidUsername:function(str){ //字母 数字 下划线3-10的用户名 
		    var pattern=/^(\w{3,10})$/;
		    return pattern.test(str);
		}
	}


	//class的增删改查
	var tools={
		hasClass:function(el, cls){
			var pattern=new RegExp('(\\s|^)'+cls+'(\\s|$)','g');
		    return pattern.test(el.className);
		},

		addClass:function(el,cls){
			if (el.length&&el.length>0) {
				for (var i = 0; i < el.length; i++) {
					tools.singleAddClass(el[i],cls)
				}
			}else{
				tools.singleAddClass(el,cls)
			}
		},
		trim:function(str){
			return str.replace(/^\s+|\s+$/,''); 
		},
		singleAddClass:function(el, cls){
		    if (tools.hasClass(el, cls)) {
		        return 
		    }else{
		        return  el.className= tools.trim(el.className) +' '+cls
		    }
		},
		removeClass:function(el,cls){
		   if (el.length && el.length > 0){ 
		   		for (var i = 0; i < el.length; i++) {
		   			tools.singleRemoveClass(el[i],cls)
		   		}
		   }else{
		   	tools.singleRemoveClass(el,cls)
		   }
		},
		singleRemoveClass:function(el,cls){
			var pattern=new RegExp('(\\s|^)'+cls+'(\\s|$)','g');
		    return el.className=el.className.replace(pattern,'');
		},
		indexOf:function(el){
			var parent = el.parentElement, 
				siblings = parent.children; 
			for (var i = 0; i < siblings.length; i++) {
				if(el===siblings[i]){return i;}
			}
			return -1;
		}
	}
	//ajax
	function ajax(obj){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){

		if (xhr.readyState == 4 && xhr.status == 200) {
			var json=JSON.parse(xhr.responseText); 
            obj.success(json);
        }

        if (xhr.readyState == 4 && xhr.status == 404) {
            obj.error();
        }
	}

	function params(data){
		var arr=[];
		for(var i in data){
			arr.push(i+'='+data[i]);
		}
		return arr.join('&');
	}
	var data=params(obj.data);

	if (obj.type.toLocaleLowerCase()==='get') {
		xhr.open(obj.type,obj.url+'?'+data,true);
		xhr.send();
	}
	if (obj.type.toLocaleLowerCase()==='post') {
		xhr.open(obj.type,obj.url,true);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(data);
	}
}
//调用ajax
// ajax({
// 	        url: '24-2.php', //接口地址
// 	        type: 'GET', // 类型， post 或者 get,
// 	        data: {
// 	            username: 2,
// 	            password: 6
// 	        },
// 	        success: function(ret) {
// 	            console.log(ret); // {status: 0}
// 	        },
// 	        error: function() {
// 	            console.log('出错了')
// 	        }
// 	    });