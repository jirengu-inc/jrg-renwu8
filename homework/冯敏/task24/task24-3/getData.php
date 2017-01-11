<?php
$userName=$_GET["userName"];
if($userName=="babybear"){
    $response=1;
}
else{
    $response=0;
}
echo $response;