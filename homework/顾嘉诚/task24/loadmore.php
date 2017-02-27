<?php
	$len = $_POST['len'];
	$start = $_POST['start'];
	$ret = array('0'=>$start + 1,'1'=>$start + 2,'2'=>$start + 3,'3'=>$start + 4,'4'=>$start + 5,'5'=>$start + 6);

	echo json_encode($ret);
?>