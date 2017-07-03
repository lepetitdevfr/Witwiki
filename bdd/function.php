<?php
require("bdd.php");

$object = '{"firstname": "jeremy", "lastname": "petit", "pseudo": "lepetitdev", "email": "jerem71100@gmail.com", "password": "test"}';
$userId = '{"id":"13", "table": "user"}';


function addUser($userJSON, $bdd){
    $user = json_decode($userJSON, TRUE);

    $sql = "INSERT INTO user (pseudo, lastname, firstname, email, password, id_role) VALUES ('" . $user["pseudo"] . "','" . $user["lastname"] . "','" . $user["firstname"] . "','" . $user["email"] . "','" . $user["password"] . "',1)";

    try {
        $bdd->query($sql);
        echo "200";
    } catch (Exception $e) {
        echo $e->getCode();
    }
}

function getContent($value,$bdd){
    $valueArray = json_decode($value, TRUE);

    $sql = "SELECT * FROM " . $valueArray["table"] . " WHERE id=". $valueArray["id"];
    try {
        $reponse = $bdd->query($sql);
        while ($donnees = $reponse->fetch(PDO::FETCH_ASSOC))
        {
            echo json_encode($donnees);
        }
    } catch (Exception $e) {
        echo $e->getCode();
    }
}

function deleteContent($value,$bdd){
    $valueArray = json_decode($value, TRUE);

    $sql = "DELETE FROM " . $valueArray["table"] . " WHERE id=". $valueArray["id"];
    echo $sql;
    try {
        $bdd->query($sql);
        echo "200";
    } catch (Exception $e) {
        echo $e->getCode();
    }
}

// deleteContent($userId,$bdd);
// addUser($object, $bdd);

?>
