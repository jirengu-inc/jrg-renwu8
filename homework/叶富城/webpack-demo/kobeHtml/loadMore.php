<?php 
$start=$_GET["start"];
$len=$_GET["len"];

$arr = array
(
    array("img/3节62分.jpg","2006年科比对阵小牛3节得到62分"),
    array("img/81分.jpg","2006年科比获得81分"),
    array("img/kobebump.jpg","2000年携手奥尼尔第一次获得总冠军")
);
$url = array_splice($arr,$start,$len,$arr);
echo json_encode($url) ; 
