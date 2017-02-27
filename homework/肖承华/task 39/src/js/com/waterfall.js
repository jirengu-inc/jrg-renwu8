/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-10 21:58:05
 * @version $Id$
 */
define(['jquery'],function($){

	function loadMore(){

		getData();

		var clock;
		$('#getMoreData').on('click',function(){
			if (clock) {
				clearTimeout(clock);
			}{
				clock = setTimeout(function(){
					 getData();
				},200)
			}	
		})

		var curPage = 1,
			perPageCount = 8;
		function getData(){
			console.log(1);
			$.ajax({
				url: 'http://platform.sina.com.cn/slide/album_tech',
				dataType: 'jsonp', 
				jsonp:"jsoncallback",
				data: {
					app_key: '1271687855',
					num: perPageCount,
					page: curPage
		 		}
			}).done(function(res){
				if (res && res.status && res.status.code === '0') {
					place(res.data);
					curPage++;
				}else{
					console.log('获取数据失败！');
				}
			}).fail(function(){ console.log("出错啦！")});
		}

		function place(nodes){
			var $nodes = renderData(nodes); 
			var defereds = []; 
			$nodes.find('img').each(function(){
				var defer = $.Deferred();
				$(this).load(function(){
					defer.resolve();
				});   
				defereds.push(defer);
			});
			$.when.apply(null,defereds).done(function() { 
				waterfall($nodes)
			});
		}

		var colSumH = [],
			nodeWidth = $(".loadItem").outerWidth(true), 
			colNum = parseInt($('#pic-ct').width()/nodeWidth);

		if (colSumH.length == '0') {
			for (var i = 0; i < colNum; i++) {
				colSumH[i] = 0;
			}
		}
		function waterfall($nodes){	
			$nodes.each(function(){ 
				var $cur = $(this),
					idx = 0,
					minColHight = colSumH[0];
				for(var i = 0; i<colSumH.length; i++) { 
					if (minColHight > colSumH[i] ) {
						idx = i;
						minColHight = colSumH[i];
					}
				}
				$cur.css({
					left: nodeWidth * idx,
					top: minColHight, 
					opacity:1
				})
				colSumH[idx] = colSumH[idx]+$cur.outerHeight(true); 
				$('#pic-ct').height(Math.max.apply(null,colSumH));
			});
		}	

		function renderData(data){
			var tpl = '',
				$node ;
			for (var i = 0; i < data.length; i++) {
				tpl += '<li class="loadItem">'
				tpl += '<a href="'+data[i].url+'" class="link">'
				tpl += '<img src="'+data[i].img_url+'" alt="">'
				tpl += '</a>'
				tpl += '<h4 class="header">'+data[i].short_name+'</h4>'
				tpl += '<p class="describe">'+data[i].short_intro+'</p>'
				tpl += '</li>'
			}
			$node = $(tpl);
 			$('#pic-ct').append($node);
 			return $node;  
		}

	}
	return loadMore
})