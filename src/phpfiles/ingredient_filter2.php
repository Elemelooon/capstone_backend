<?php
header("Access-Control-Allow-Origin: *");
$server = 'localhost';
$username = 'root';
$password = '';
$db = 'whatsyourulam';
$method = $_SERVER['REQUEST_METHOD'];

$conn = mysqli_connect($server, $username, $password, $db);

$id = $_POST ['id'];
$idlength = $_POST ['idlength'];
$sql = "SELECT * FROM recipe_tbl  
JOIN ingredient_filter_tbl ON recipe_tbl.recipe_id = ingredient_filter_tbl.recipe_id 
JOIN ingredients_tbl ON ingredient_filter_tbl.ingredient_id = ingredients_tbl.ingredient_id WHERE ingredients_tbl.ingredient_id IN ($id) 
GROUP BY recipe_tbl.recipe_id, recipe_tbl.recipe_name 
HAVING COUNT(DISTINCT ingredients_tbl.ingredient_id) = '$idlength'";


$result = mysqli_query($conn, $sql);

echo "[";
    for($i=0;$i < mysqli_num_rows($result); $i++){
        echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
    }
echo "]"; 

?>