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
    $entity = API::post();
    $result = $model->insert($entity);
    if($result != -1)
        $entity['Id'] = $result;
    http_response_code($result != -1 ? 201 : 400 );
    echo json_encode([
        'message'   =>  $entity
    ],JSON_UNESCAPED_UNICODE);
}
catch(PDOException $e)
{
    http_response_code(400);
    echo json_encode([
        'message'   =>  $e->getMessage()
    ]);
}
