<?php
	$len = $_GET['len'];
	$start = $_GET['start'];
	$ret = array('0'=>$start + 1,'1'=>$start + 2,'2'=>$start + 3);

	echo json_encode($ret);
?>