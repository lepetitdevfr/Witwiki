<?php
header('Content-type: application/json');

require("bdd.php");
require("all.php");
require("user.php");

$object = '{"id": "15","firstname": "jeremy", "lastname": "petit", "pseudo": "lepetitdev", "email": "jerem71100@gmail.com", "password": "test", "id_role": "3"}';
$userId = '{"id":"15", "table": "user"}';
$login = '{"email":"jerem71100@gmail.com", "password": "test"}';
$object = '{"firstname":"jérémy","lastname":"petit","pseudo":"Lepetitdev","email":"jerem71100@gmail.com","password":"test"}';

// deleteContent($userId,$bdd);
// getContent($userId,$bdd);
// addUser($object, $bdd);
// updateUser($object, $bdd);
// $string = mysql_real_escape_string($object);
// 			$string = addcslashes($string, '%_');
//             echo $string;
//Securise les attaques externes
// if ($_SERVER['SERVER_NAME'] == "localhost") {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $type = $request->type;
    $content = $request->content;
    echo $request;
    if (isset($type) && isset($content)) {
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
            echo "default case";
            break;
        }
    }

// }
?>
