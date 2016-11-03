//使用数组拼接出如下字符串 （***）
/*
<dl class="product">
    <dt>女装</dt>
    <dd>短款</dd>
    <dd>冬季</dd>
    <dd>春装</dd>
</dl>
*/
var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装']
};
function getTplStr(data){
	var arr=['<dl class="product">'];
	for(prop in prod){
		if(typeof prod[prop] === "string"){
			arr.push('    <dt>' + prod[prop] + '</dt>');
		}else{
			for(var i=0;i<prod[prop].length;i++){
				arr.push('    <dt>' + prod[prop][i] + '</dt>');
			}
		}
	}
	arr.push('</dl>');
	return arr.join('\n');
};
var result = getTplStr(prod);