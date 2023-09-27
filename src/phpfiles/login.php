<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost", "root", "", "whatsyourulam");
if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);

    $user = $dData['user'];
    $pass = $dData['pass'];

    $result = "";

    if ($user != "" and $pass != "") {
        $sql = "SELECT * FROM userinfo WHERE username = '$user'";
        $res = mysqli_query($conn, $sql);

        if (mysqli_num_rows($res) != 0) {
            $row = mysqli_fetch_array($res);
            if ($pass != $row['password']) {
                $result = "Invalid Password";
            } else {
                $result = "Successfuly Logged In! Redirecting..";
            }
        } else {
            $result = "Invalid Username";
        }
    } else {
        $result = "";
    }

    $response[] = array("result" => $result);
    echo json_encode($response);
}

?>