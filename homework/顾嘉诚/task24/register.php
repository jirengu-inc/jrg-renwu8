<?php
	$a = array();
	$username = $_GET['username'];
	if(!in_array($username, $a)){
		array_push($a,$username);
		$ret = array('0'=>'true');
	}else{
		$ret = array('0'=>'false');
	}

	echo json_encode($ret);
?>