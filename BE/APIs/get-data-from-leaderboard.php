<?php

include ("connection.php");

$sql="SELECT name,score,duration FROM leaderboard ORDER BY score DESC LIMIT 5" ;
$query=$mysqli->prepare($sql);   
$query->execute();

$array=$query->get_result();
$response=[];
while($a=$array->fetch_assoc()){
    $response[]=$a;
}

echo json_encode($response);