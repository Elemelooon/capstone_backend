<?php

header("Access-Control-Allow-Origin: *");
$server = 'localhost';
$username = 'root';
$password = '';
$db = 'whatsyourulam';
$method = $_SERVER['REQUEST_METHOD'];

$conn = mysqli_connect($server, $username, $password, $db);

$user = $_POST["user"];
$pass = $_POST["pass"];
$sql = "SELECT * FROM `userinfo` WHERE `username` = '$user' AND `password` = '$pass'" ;
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // Login successful
    echo json_encode(["success" => true]);
} else {
    // Login failed
    echo json_encode(["success" => false]);
}

?>