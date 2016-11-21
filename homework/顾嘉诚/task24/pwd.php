<?php
	$a = array();
	$b = array();
	$username = $_POST['username'];
	$pwd = $_POST['pwd'];
	if(!in_array($username, $a)){
		$ret = array('0'=>'true');
		array_push($a,$username);
		array_push($b,$pwd);
	}else{
		$ret = array('0'=>'false');
	}

	echo json_encode($ret);

?>