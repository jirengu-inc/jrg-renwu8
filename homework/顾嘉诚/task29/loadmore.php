<?php
	$start = $_POST['start'];
	$len = $_POST['len'];
	$items = array();

	for($i=0;$i<$len;$i++){
		array_push($items, ($start+$i+1));
	}
	$ret = array('status'=>1,'data'=>$items);

	echo json_encode($ret);
?>