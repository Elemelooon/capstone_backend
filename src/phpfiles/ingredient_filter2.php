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

// $idlist = implode(',', $id);
// $sql = "SELECT * FROM `ingredient_filter_tbl` INNER JOIN recipe_tbl ON ingredient_filter_tbl.recipe_id = recipe_tbl.recipe_id  WHERE `ingredient_id` IN ($id)";
// $sql = "SELECT * FROM `ingredient_filter_tbl` INNER JOIN recipe_tbl ON ingredient_filter_tbl.recipe_id = recipe_tbl.recipe_id  WHERE `ingredient_list` IN ($idlist) ";
$result = mysqli_query($conn, $sql);
// $filtered_data = [];
// foreach ($result as $data) {
//     if (in_array($data['ingredient_id'], $id)) {
//         $filtered_data[$data['recipe_id']][]=$data;
//     }
// }

echo "[";
    for($i=0;$i < mysqli_num_rows($result); $i++){
        echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
    }
echo "]"; 

// echo "[";
//     for($i=0;$i < mysqli_num_rows($result); $i++){
//         $json = mysqli_fetch_object($result);
//         $hakdog = $json->id;
//         if (!in_array($hakdog,$array)) {
//             echo ($i > 0 ? ',' : '').json_encode($json);
//             $array[] = $hakdog;
//         }
    
//     }
// echo "]"; 
?>