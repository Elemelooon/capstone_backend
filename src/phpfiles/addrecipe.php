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
$sql = "SELECT * FROM recipe_tbl";

}
if ($method == "POST") {
    $function = $_POST['function'];
    if ($function == 1) {
        $rname = $_POST['rname'];
        $list = $_POST['list'];
        $image1 = $_FILES['image1']['tmp_name'];
        $imageData1 = file_get_contents($image1);
        $base64Image1 = base64_encode($imageData1);

        $sql = "INSERT INTO recipe_tbl (recipe_name, ingredient_list, image1) VALUES ('$rname', '$list', '$base64Image1')";
    }else if ($function == 2){
        $id = $_POST ['id'];
        $sql = "DELETE FROM recipe_tbl WHERE recipe_id = '$id'";
    }else if ($function == 3){
        $rname = $_POST['rname'];
        $list = $_POST['list'];
        $id = $_POST ['id'];
        
        if (isset($_FILES['image1']['tmp_name'])) {
            $image1 = $_FILES['image1']['tmp_name'];
            $imageData1 = file_get_contents($image1);
            $base64Image1 = base64_encode($imageData1);
            $sql = "UPDATE recipe_tbl SET recipe_name = '$rname', ingredient_list = '$list', image1 = '$base64Image1' WHERE recipe_id = '$id'";
        } else {
            // No new image provided, update only the text fields
            $sql = "UPDATE recipe_tbl SET recipe_name = '$rname', ingredient_list = '$list' WHERE recipe_id = '$id'";
        }
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