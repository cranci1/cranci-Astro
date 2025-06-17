<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

http_response_code(200);
header('Content-Type: application/json');
$jsonResponse = array(
  "success" => true,
  "error" => false
);
echo json_encode($jsonResponse);
exit;