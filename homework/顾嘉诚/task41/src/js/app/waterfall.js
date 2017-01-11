define(['jquery'],function($){
	var waterFalls = (function(){
		function realSty($ele){
			var ColTolHeight = [];
			var winWidth = $(window).width(),
				eleWidth = $('.item').eq(0).outerWidth(true),
				colNum = Math.floor(winWidth / eleWidth);
			for(var i = 0;i < colNum;i ++){
				ColTolHeight.push(0);
			}
			$ele.each(function(id,el){
				var $cur = $(el);
				var colHeightMin = ColTolHeight[0],
				idx = 0;
				ColTolHeight.forEach(function(e,i,array){
					if(e < colHeightMin){
						colHeightMin = e;
						idx = i;
					}
				});
				$cur.css({
					top: ColTolHeight[idx],
					left: idx * eleWidth
				});
				ColTolHeight[idx] += $cur.outerHeight(true);
			});
			$ele.parent().height(Math.max.apply(null,ColTolHeight));
		}	

		$(window).on('resize',function(){
			realSty($('.item'));
		});


		realSty($('.item'));

		return {
			realize: realSty
		};
	})();
	return waterFalls;
});