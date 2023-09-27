<?php
header("Access-Control-Allow-Origin: *");
$server = 'localhost';
$username = 'root';
$password = '';
$db = 'whatsyourulam';
$method = $_SERVER['REQUEST_METHOD'];

$conn = mysqli_connect($server, $username, $password, $db);


$sql = "SELECT * FROM ingredients_tbl" ;

$result = mysqli_query($conn, $sql);

    echo "[";
        for($i=0;$i < mysqli_num_rows($result); $i++){
            echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
        }
    echo "]"; 



?>