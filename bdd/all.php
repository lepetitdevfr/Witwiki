<?php

$object = '{"firstname": "jeremy", "lastname": "petit", "pseudo": "lepetitdev", "email": "jerem71100@gmail.com", "password": "test"}';
$userId = '{"id":"13", "table": "user"}';

function getContent($value,$bdd){
    $valueArray = json_decode($value, TRUE);

    $sql = "SELECT * FROM " . $valueArray["table"] . " WHERE id=". $valueArray["id"];
    try {
        $valid = 0;
        $reponse = $bdd->query($sql);
        while ($donnees = $reponse->fetch(PDO::FETCH_ASSOC))
        {
            $valid = 1;
            echo json_encode($donnees);
        }

        if ($valid == 0) {
            echo '{"code":"404"}';
        }

    } catch (Exception $e) {
        echo $e->getCode();
        echo '{"code":"'. $e->getCode() .'"}';
    }
}

function deleteContent($value,$bdd){
    $valueArray = json_decode($value, TRUE);

    $sql = "DELETE FROM " . $valueArray["table"] . " WHERE id=". $valueArray["id"];
    try {
        $bdd->query($sql);
        echo '{"code":"200"}';
    } catch (Exception $e) {
        echo '{"code":"'. $e->getCode() .'"}';
    }
}
