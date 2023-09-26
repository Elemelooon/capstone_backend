<?php
session_start(); // Start the session

// Check if the user is already authenticated, redirect if necessary
if (isset($_SESSION['authenticated']) && $_SESSION['authenticated'] === true) {
    // User is already authenticated, redirect to the protected page
    header("Location: http://localhost:3002/Addrecipe"); // Replace with your actual protected page URL
    exit();
}


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
    $_SESSION['authenticated'] = true;
    echo json_encode(["success" => true]);
} else {
    // Login failed
    echo json_encode(["success" => false]);
}

?>