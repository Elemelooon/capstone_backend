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
$sql = "SELECT * FROM ingredient_filter_tbl";

}
if ($method == "POST") {
    $function = $_POST['function'];
    if ($function == 1) {
        $recipe = $_POST['recipe'];
        $list = $_POST['list'];
        $sql = "INSERT INTO ingredient_filter_tbl (recipe_id, ingredient_id) VALUES ('$recipe', '$list')";
    }else if ($function == 2){
        $id = $_POST ['id'];
        $sql = "DELETE FROM ingredient_filter_tbl WHERE ingredient_list_id = '$id'";
    }else if ($function == 3){
        $recipe = $_POST['recipe'];
        $list = $_POST['list'];
        $id = $_POST ['id'];
        $sql = "UPDATE ingredient_filter_tbl SET recipe_id = '$recipe', ingredient_id = '$list' WHERE ingredient_list_id = '$id'";
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