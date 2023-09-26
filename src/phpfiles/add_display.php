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
$sql = "SELECT * FROM ingredient_recipe";

}
if ($method == "POST") {
    $function = $_POST['function'];
    if ($function == 1) {
        $measure = $_POST['measure'];
        $ingredient = $_POST['ingredient'];
        $comment = $_POST['comment'];
        $recipe = $_POST['recipe'];
        $sql = "INSERT INTO ingredient_recipe (measurement, ingredient_display, comment, recipe_id) VALUES ('$measure', '$ingredient', '$comment', '$recipe')";
    }else if ($function == 2){
        $id = $_POST ['id'];
        $sql = "DELETE FROM ingredient_recipe WHERE recipeingredient_id = '$id'";
    }else if ($function == 3){
        $measure = $_POST['measure'];
        $ingredient = $_POST['ingredient'];
        $comment = $_POST['comment'];
        $recipe = $_POST['recipe'];
        $id = $_POST ['id'];
        $sql = "UPDATE ingredient_recipe SET measurement = '$measure', ingredient_display = '$ingredient', comment = '$comment', recipe_id = '$recipe' WHERE recipeingredient_id = '$id'";
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