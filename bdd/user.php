<?php
function addUser($userJSON, $bdd){
    echo $userJSON;
    $user = json_decode($userJSON, TRUE);

    $mdp = password_hash($user["password"], PASSWORD_DEFAULT);
    $sql = "INSERT INTO user (pseudo, lastname, firstname, email, password, id_role) VALUES ('" . $user["pseudo"] . "','" . $user["lastname"] . "','" . $user["firstname"] . "','" . $user["email"] . "','" . $mdp . "',3)";

    try {
        $bdd->query($sql);
        echo '{"code":"200"}';
    } catch (Exception $e) {
        echo '{"code":"'. $e->getCode() .'"}';
    }
}

function updateUser($userJSON, $bdd){
    $user = json_decode($userJSON, TRUE);
    $mdp = password_hash($user["password"], PASSWORD_DEFAULT);
    $sql = "UPDATE user SET pseudo = '" . $user["pseudo"] . "', lastname = '" . $user["lastname"] . "', firstname = '" . $user["firstname"] . "', email = '" . $user["email"] . "', password = '" . $mdp . "', id_role = " . $user["id_role"] . " WHERE id = ". $user["id"];

    try {
        $bdd->query($sql);
        echo '{"code":"200"}';
    } catch (Exception $e) {
        echo '{"code":"'. $e->getCode() .'"}';
    }
}

function checkLogin($userJSON, $bdd){
    $user = json_decode($userJSON, TRUE);
    $mdp = password_hash($user["password"], PASSWORD_DEFAULT);
    $sql = "SELECT id, pseudo, lastname, firstname, email, id_role FROM user WHERE password = '". $mdp ."' AND email = '". $user["email"]."'";

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
