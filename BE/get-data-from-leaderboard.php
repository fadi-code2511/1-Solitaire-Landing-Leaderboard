<?php

include ("connection.php");

$sql="SELECT name,score,duration FROM leaderboard ORDER BY score DESC";
$query=$mysqli->prepare($sql);
$query->execute();

$array=$query->get_result();
$response=[];
while($article=$array->fetch_assoc()){
    $response[]=$article;
}

echo json_encode($response);