<?php

$name=array("xianyu","hunger");//已存在的用户名

$length=count($name);//计算数组长度

$status1 = array('status'=>1);

$status2 = array('status'=>0);

$jsdata1=json_encode($status1);

$res =json_encode($status1);

for ($i=0; $i <$length ; $i++) {  //循环数组，得到与GET参数相同的值 
	if ($name[$i]===$_GET["username"]) {
		$res =json_encode($status2);
	}
		array_push($name,$_GET["username"]); //如果没有相同的把得到的参数添加到数组	
};
	echo $res;	
?> 

