//2.使用实现 addClass(el, cls)、hasClass(el, cls)、removeClass(el,cls)，使用正则
//ps： 视频里问题纠正
/*
	\b指单词边界，包括开头、结尾、空格分隔、中横行分隔。所以对于hunger-valley,hungry被认为是一个单词。
	所以class的判断需要改成下面的方式
	function hasClass(el,class){
		var reg = new RegExp('(\\s|^)' + cls + '(\\b|$)','g');//这样
		return  reg.test(el.className);
	}
*/
//提示: el为dom元素，cls为操作的class， el.className获取el元素的class
var el={};
el.className = "middle middle-text middle-img";
function addClass(el, cls){
	var patt = new RegExp('(\\s|^)' + cls + '(\\b|$)','g');
	if(!(patt.test(el.className))){
		return el.className + " " + cls;	
	}
	else return null;
}
addClass(el,'middle');

function hasClass(el, cls){
	var patt = new RegExp('(\\s|^)' + cls + '(\\b|$)','g');
	return  patt.test(el.className);
}

function removeClass(el, cls){
	var patt = new RegExp('(\\s|^)' + cls + '(\\b|$)','g');
	if(!(patt.test(el.className))){
		return el.className.replace(patt,"");
	}
	else return el.className;
}