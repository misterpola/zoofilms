<?php
	$host = 'localhost';
	$user = 'root';
	$pass = '123456'; 
	$db   = 'zoofilms'; 

	error_reporting(E_ALL);
	ini_set('display_errors', 1);

	$dsn = 'mysql:host='. $host . ';dbname=' . $db;

	$pdo = new PDO($dsn,$user,$pass);
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
	$pdo->setAttribute( PDO::ATTR_EMULATE_PREPARES, false);
?>