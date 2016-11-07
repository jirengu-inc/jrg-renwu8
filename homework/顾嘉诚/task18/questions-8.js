//8.写一个函数isPalindrome,判断一个字符串是不是回文字符串（正读和反读一样，比如 abcdcba 是回文字符串， abcdefg不是）
function isPalindrome(str){
	var arr=str.split("");
	return arr.every(function(e,i,a){return e===a[a.length-i-1];});
}

isPalindrome("ab");//fasle
isPalindrome("abba");//true
isPalindrome("abcba");//true