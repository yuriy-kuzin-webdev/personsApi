<?php
// необходимые HTTP-заголовки 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//Инициализация
include_once '../core/Init.php';

try
{
    $result = $model->select('*',API::get());
    http_response_code(200);
    echo json_encode([
        'message'   =>  $result
    ],JSON_UNESCAPED_UNICODE);
}
catch(PDOException $e)
{
    http_response_code(400);
    echo json_encode([
        'message'   =>  $e->getMessage()
    ]);
}