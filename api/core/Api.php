<?php

abstract class API
{
    public static function get()
    {
        return self::sanitize($_GET);
    }
    public static function post()
    {
        return self::sanitize($_POST);
    }
    public static function input()
    {
        return self::sanitize( json_decode( file_get_contents('php://input'), true) );
    }
    public static function sanitize($data)
    {
        foreach($data as $key=>$value)
            $data[$key]=htmlspecialchars(strip_tags($value));

        return $data;
    }
}