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
$sql = "SELECT * FROM instruction_tbl";

}
if ($method == "POST") {
    $function = $_POST['function'];
    if ($function == 1) {
        $instruct = $_POST['instruct'];
        $recipe = $_POST['recipe'];
        $sql = "INSERT INTO instruction_tbl (instruction_text, recipe_id) VALUES ('$instruct', '$recipe')";
    }else if ($function == 2){
        $id = $_POST ['id'];
        $sql = "DELETE FROM instruction_tbl WHERE instruction_id = '$id'";
    }else if ($function == 3){
        $instruct = $_POST['instruct'];
        $recipe = $_POST['recipe'];
        $id = $_POST ['id'];
        $sql = "UPDATE instruction_tbl SET instruction_text = '$instruct', recipe_id = '$recipe' WHERE instruction_id = '$id'";
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