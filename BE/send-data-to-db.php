<?php
include("connection.php");

$data=json_decode(file_get_contents("php://input"),true);

$name = $data['name'];
$score = rand(50, 200); //  random score
$duration = rand(1, 4) . ":" . rand(0, 59); // random duration

$sql = "INSERT INTO leaderboard (name, score,duration) 
        VALUES (?,?,?)";

$query = $mysqli->prepare($sql);
$query->bind_param("sis",$name,$score,$duration);  //we use it for the sql injection
$query->execute();

if ($query) {
    echo json_encode(["message" => "Score added"]);
} else {
    echo json_encode(["error" => $mysqli->error]);
}

