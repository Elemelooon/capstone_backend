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
$sql = "SELECT * FROM restaurant_tbl";

}
if ($method == "POST") {
    $function = $_POST['function'];
    if ($function == 1) {
        $restaurantname = $_POST['restaurantname'];
        $locationid = $_POST['locationid'];
        $image1 = $_FILES['image1']['tmp_name'];
        $imageData1 = file_get_contents($image1);
        $base64Image1 = base64_encode($imageData1);

        $sql = "INSERT INTO restaurant_tbl (restaurant_name, location_id, restaurant_image) VALUES ('$restaurantname', '$locationid', '$base64Image1')";
    }else if ($function == 2){
        $id = $_POST ['id'];
        $sql = "DELETE FROM restaurant_tbl WHERE restaurant_id = '$id'";
    }else if ($function == 3){
        $restaurantname = $_POST['restaurantname'];
        $locationid = $_POST['locationid'];
        $id = $_POST ['id'];
        
        if (isset($_FILES['image1']['tmp_name'])) {
            $image1 = $_FILES['image1']['tmp_name'];
            $imageData1 = file_get_contents($image1);
            $base64Image1 = base64_encode($imageData1);
            $sql = "UPDATE restaurant_tbl SET restaurant_name = '$restaurantname', location_id = '$locationid', restaurant_image = '$base64Image1' WHERE restaurant_id = '$id'";
        } else {
            // No new image provided, update only the text fields
            $sql = "UPDATE restaurant_tbl SET restaurant_name = '$restaurantname', location_id = '$locationid' WHERE restaurant_id = '$id'";
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