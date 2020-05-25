<?php
// необходимые HTTP-заголовки 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//Инициализация
include_once '../core/Init.php';

try
{
    $result = $model->delete(API::post());
    http_response_code( 200 );
    echo json_encode([
        'message'   =>  $result . "affected rows"
    ],JSON_UNESCAPED_UNICODE);
}
catch(PDOException $e)
{
    http_response_code(400);
    echo json_encode([
        'message'   =>  $e->getMessage()
    ]);
}