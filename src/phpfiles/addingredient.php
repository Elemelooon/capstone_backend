<?php
header("Access-Control-Allow-Origin: *");
$server = 'localhost';
$username = 'root';
$password = '';
$db = 'whatsyourulam';
$method = $_SERVER['REQUEST_METHOD'];


$conn = mysqli_connect($server, $username, $password, $db);

// if($conn){
//     echo "Connected";
// }
if ($method == "GET") {
$sql = "SELECT * FROM ingredients_tbl";

}
if ($method == "POST") {
    $function = $_POST['function'];
    if ($function == 1) {
        $type = $_POST['type'];
        $list = $_POST['list'];
        $sql = "INSERT INTO ingredients_tbl (ingredient_type, ingredient_name) VALUES ('$type', '$list')";
    }else if ($function == 2){
        $id = $_POST ['id'];
        $sql = "DELETE FROM ingredients_tbl WHERE ingredient_id = '$id'";
    }else if ($function == 3){
        $type = $_POST['type'];
        $list = $_POST['list'];
        $id = $_POST ['id'];
        $sql = "UPDATE ingredients_tbl SET ingredient_type = '$type', ingredient_name = '$list' WHERE ingredient_id = '$id'";
    }
    
    
}

$result = mysqli_query($conn, $sql);

if ($method == "GET") {
    echo "[";
    for($i=0; $i < mysqli_num_rows($result); $i++){
        echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
    }
echo "]";
}

?>