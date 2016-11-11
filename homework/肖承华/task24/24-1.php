<?php
	$index=$_GET["start"];
	$len=$_GET["len"];

	$arr=array();
	for ($i=1; $i<=$len; $i++){
		 $arr[] ='内容'.($index+$i);
	};	
	// sleep(1);
	$jsonencode = json_encode($arr);
	echo $jsonencode;
?> 
