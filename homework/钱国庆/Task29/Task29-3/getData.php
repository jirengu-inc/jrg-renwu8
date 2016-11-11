<?php

$start = $_GET['start'];
$length = $_GET['length'];
$items = array();

for($i = 0; $i < $length; $i++){
    array_push($items, ($start + $i));
}
$data = array('data'=>$items);

echo json_encode($data);