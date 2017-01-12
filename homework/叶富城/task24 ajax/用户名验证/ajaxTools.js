/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-10 22:45:51
 * @version $Id$
 */
 	//ajax封装
function ajax(opts){
      var xml = new XMLHttpRequest();
      xml.onreadystatechange = function(){
        if(xml.readyState == '4' && xml.status == '200'){
          opts.success(JSON.parse(xml.responseText));
        }
        if(xml.readyState == '4' && xml.status =='404'){
          opts.error();
        }
      }
      var dataStr = '';
      for(var key in opts.data){
        dataStr += key + '=' + opts.data[key] + '&';
      }
      dataStr = dataStr.substr(0,dataStr.length-1);
      if(opts.type.toLowerCase() == 'get'){
        xml.open(opts.type,opts.url+'?'+dataStr,true);
        xml.send(null);
      }
      if(opts.type.toLowerCase() == 'post'){
        xml.open(opts.type,opts.url,true);
        xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xml.send(dataStr);
      }
    }
	//增减class的名字;

		function hasClass(ele, cls) {
		  return !!ele.className.match(new RegExp('\\b' + cls + '\\b'));
		}

		function addClass(ele, cls) {
		  if (ele.length && ele.length > 0) {
		    for (var i = 0; i < ele.length; i++) {
		      singleAddClass(ele[i], cls);
		    }
		  } else {
		    singleAddClass(ele, cls);
		  }
		}

		function removeClass(ele, cls) {
		  if (ele.length && ele.length > 0) {
		    for (var i = 0; i < ele.length; i++) {
		      singleRemoveClass(ele[i], cls);
		    }
		  } else {
		    singleRemoveClass(ele, cls);
		  }
		}

		function singleAddClass(ele, cls) {
		  if (hasClass(ele, cls)) return;
		  ele.className += ' ' + cls;
		}

		function singleRemoveClass(ele, cls) {
		  ele.className = ele.className.replace(new RegExp('\\b' + cls + '\\b', 'g'), '');
		}


//合法用户名，3-10个字符，只能是字母，数字，下划线
	function isUsername(str){
		var reg = new RegExp('^[a-zA-Z_0-9]{3,10}$','g');
		return reg.test(str);
	}
//合法的密码, 6-15个字符，至少包括大写，小写，下划线，数字两种
	function isPassword(str){
		if(str.length<6 ||str.length>16){
			return false;
		}
		if(/[^a-zA-Z_0-9]/.test(str)){
			return false;
		}
		if(/(^[a-z]+$)| (^[A-Z]+$) |(^_+$) |(^[0-9]+$)/g.test(str)){
			return false;
		}else{
			return true;
		}
	}
