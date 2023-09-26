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
$sql = "SELECT * FROM location_tbl";

}
if ($method == "POST") {
    $function = $_POST['function'];
    if ($function == 1) {
        $location = $_POST['location'];
        $sql = "INSERT INTO location_tbl (`location`) VALUES ('$location')";
    }else if ($function == 2){
        $id = $_POST ['id'];
        $sql = "DELETE FROM location_tbl WHERE `location` = '$id'";
    }else if ($function == 3){
        $location = $_POST['location'];
        $id = $_POST ['id'];
        $sql = "UPDATE location_tbl SET `location` = '$location' WHERE ingredient_list_id = '$id'";
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