define([],function(){
function Waterfall($ct,nodeWidth){
	this.$ct = $ct;
	this.nodeWidth = nodeWidth;
	this.colNum = 0;
	this.colSumHeight = [];
	this.init();
	this.maxHeight = 0;
}
Waterfall.prototype.init = function(){
    this.colNum = parseInt(this.$ct.width()/this.nodeWidth);
    for(var i = 0;i<this.colNum;i++){
    	this.colSumHeight.push(0);
    }
}    
Waterfall.prototype.render = function($layoutBlock){
	var idx = 0;
	var minSumHeight = this.colSumHeight[0];
	for(var i=0;i<this.colNum;i++){
		if(this.colSumHeight[i]<minSumHeight){
			minSumHeight = this.colSumHeight[i];
			idx = i;
		}
	}
	$layoutBlock.css('left',this.nodeWidth*idx);
	$layoutBlock.css('top',minSumHeight);
	this.$ct.append($layoutBlock);
	this.colSumHeight[idx] = this.colSumHeight[idx] + $layoutBlock.outerHeight(true);
	for(var i=0;i<this.colNum;i++){
		if(this.colSumHeight[i]>this.maxHeight){
			this.maxHeight = this.colSumHeight[i];
		}
	}
	this.$ct.css('height',this.maxHeight);
}
var waterfall;
return {
	init: function($ct,nodeWidth){
		waterfall =  new Waterfall($ct,nodeWidth);
	},
	render: function($html){
		waterfall.render($html);
	}
};
})