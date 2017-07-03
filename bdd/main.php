<?php
require("bdd.php");
require("all.php");
require("user.php");

$object = '{"id": "15","firstname": "jeremy", "lastname": "petit", "pseudo": "lepetitdev", "email": "jerem71100@gmail.com", "password": "test", "id_role": "3"}';
$userId = '{"id":"13", "table": "user"}';
$login = '{"email":"jerem71100@gmail.com", "password": "test"}';

// deleteContent($userId,$bdd);
// addUser($object, $bdd);
// updateUser($object, $bdd);

if (isset($_GET["type"]) && isset($_GET["content"])) {
    $content = $_GET["content"];
    $type = $_GET["type"];
    switch ($type) {
        case 'login':
            checkLogin($content, $bdd);
            break;
        case 'addUser':
            addUser($content, $bdd);
            break;
        case 'get':
            getContent($content,$bdd);
            break;
        case 'delete':
            deleteContent($content,$bdd);
            break;
        default:
            # code...
            break;
    }
}

 ?>
