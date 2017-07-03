<?php
require("bdd.php");
require("all.php");
require("user.php");

$object = '{"id": "15","firstname": "jeremy", "lastname": "petit", "pseudo": "lepetitdev", "email": "jerem71100@gmail.com", "password": "test", "id_role": "3"}';
$userId = '{"id":"13", "table": "user"}';

// deleteContent($userId,$bdd);
// addUser($object, $bdd);
updateUser($object, $bdd);

 ?>
