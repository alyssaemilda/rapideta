
<?php

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);


$response = [
    "status" => "success",
    "message" => "Response saved"
];

echo json_encode($response);

?>
