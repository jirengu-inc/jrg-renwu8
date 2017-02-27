//9.写一个ageSort函数实现数组中对象按age从小到大排序 （***）
var john = { name: "John Smith", age: 23 }
var mary = { name: "Mary Key", age: 18 }
var bob = { name: "Bob-small", age: 6 }
var people = [ john, mary, bob ]
ageSort(people) // [ bob, mary, john ]

function ageSort(arr){
	arr.sort(function(a,b){
		return a["age"]-b["age"];
	});
}

这一题不是很有思路，对sort()方法理解不到位