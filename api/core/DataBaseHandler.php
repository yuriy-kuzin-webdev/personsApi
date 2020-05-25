<?php

class DataBaseHandler
{
    private const HOST = "localhost";
    private const USER = "root";
    private const PASSWORD = "";
    private const CHARSET = 'utf8';
    protected $pdo;
    protected function __construct(string $databaseName)
    {
        try
        {
            $dsn = 'mysql:host=' . self::HOST . ';dbname=' . $databaseName . ';charset=' . self::CHARSET;
            $opt = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ]; 
            $this->pdo = new PDO($dsn, self::USER, self::PASSWORD, $opt);

        }
        catch(PDOException $e)
        {
            die('Connection Error : ' . $e->getMessage() );
        }
    }
}