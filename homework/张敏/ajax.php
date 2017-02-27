<?php
// 后端 php 测试接口文件
$start = $_POST['start']; //2
$len = $_POST['len'];  //6
$items = array();

for ($i = 0; $i < $len; $i++) {
//    array_push($items, '内容' . ($start+$i));
    array_push($items, ($start + $i));
}
$ret = array('status' => 1, 'data' => $items);

//{status: 1, data: ['内容1','内容2','内容3']}
//sleep(0.5);
echo json_encode($ret);