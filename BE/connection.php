<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$host = "localhost";
$user = "root";
$pass = ""; 
$dbname = "solitaire_db";

$mysqli = new mysqli($host, $user, $pass, $dbname);