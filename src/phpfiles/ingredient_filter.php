<?php
header("Access-Control-Allow-Origin: *");
$server = 'localhost';
$username = 'root';
$password = '';
$db = 'whatsyourulam';
$method = $_SERVER['REQUEST_METHOD'];

$conn = mysqli_connect($server, $username, $password, $db);

if ($method == "GET") {
$sql = "SELECT * FROM ingredients_tbl" ;
}

if ($method == "POST") {
    // $function = $_POST['function'];
    // if ($function == 1) {
        $id = $_POST ['id'];
        $sql = "SELECT * FROM `ingredients_tbl` WHERE `ingredient_id` IN ($id)";
    // }
}
$result = mysqli_query($conn, $sql);
if ($method == "GET") {
    echo "[";
        for($i=0;$i < mysqli_num_rows($result); $i++){
            echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
        }
    echo "]"; 
    } elseif ($method == "POST") {
    echo "[";
        for($i=0;$i < mysqli_num_rows($result); $i++){
            echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
        }
    echo "]"; 
    }


?>