Exposure = (function(){
	var flag;
	var exposure = {
		bind:function(target,callback){
			if (exposure.isShow(target)) {
				typeof callback === 'function'? callback.call(target):console.log('请传入函数')
			}
		},

		one:function(target,callback){
			if (!flag) {
				if(exposure.isShow(target)){
					typeof callback === 'function'? callback.call(target):console.log('请传入函数')
					flag = true;
				}
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
	return exposure;
})();
