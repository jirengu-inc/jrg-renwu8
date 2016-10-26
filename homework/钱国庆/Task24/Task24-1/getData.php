<?php

$username = $_GET["username"];
$password = $_GET["password"];

if ($username == "xiaoming") {
    $ret = array("username" => $username, "password" => $password);
} else {
    $ret = array("username" => "", "password" => "");
}

echo json_encode($ret);
