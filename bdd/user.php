<?php
function addUser($userJSON, $bdd){
    $user = json_decode($userJSON, TRUE);
    $sql = "INSERT INTO user (pseudo, lastname, firstname, email, password, id_role) VALUES ('" . $user["pseudo"] . "','" . $user["lastname"] . "','" . $user["firstname"] . "','" . $user["email"] . "','" . $user["password"] . "',3)";

    try {
        $bdd->query($sql);
        echo '{"code":"200"}';
    } catch (Exception $e) {
        echo '{"code":"'. $e->getCode() .'"}';
    }
}

function updateUser($userJSON, $bdd){
    $user = json_decode($userJSON, TRUE);
    $sql = "UPDATE user SET pseudo = '" . $user["pseudo"] . "', lastname = '" . $user["lastname"] . "', firstname = '" . $user["firstname"] . "', email = '" . $user["email"] . "', password = '" . $user["password"] . "', id_role = " . $user["id_role"] . " WHERE id = ". $user["id"];

    try {
        $bdd->query($sql);
        echo '{"code":"200"}';
    } catch (Exception $e) {
        echo '{"code":"'. $e->getCode() .'"}';
    }
}

function checkLogin($userJSON, $bdd){
    $user = json_decode($userJSON, TRUE);
    $sql = "SELECT id, pseudo, lastname, firstname, email, id_role FROM user WHERE password = '". $user["password"]."' AND email = '". $user["email"]."'";

    try {
        $valid = 0;
        $reponse = $bdd->query($sql);
        while ($donnees = $reponse->fetch(PDO::FETCH_ASSOC))
        {
            echo json_encode($donnees);
            $valid = 1;
        }

        if ($valid == 0) {
            echo '{"code":"404"}';
        }

    } catch (Exception $e) {
        echo '{"code":"'. $e->getCode() .'"}';
    }
}
