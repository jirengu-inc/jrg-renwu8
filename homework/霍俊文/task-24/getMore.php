<?php

	$start = $_GET['start'];
	$length = $_GET['length'];
	$items = array();
	for($i = 0;$i<$length;$i++){
		array_push($items,($start+$i+1));
	}
	echo json_encode($items);
?>	