<?php
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

function updateUser($userJSON, $bdd){
    $user = json_decode($userJSON, TRUE);
    $sql = "UPDATE user SET pseudo = '" . $user["pseudo"] . "', lastname = '" . $user["lastname"] . "', firstname = '" . $user["firstname"] . "', email = '" . $user["email"] . "', password = '" . $user["password"] . "', id_role = " . $user["id_role"] . " WHERE id = ". $user["id"];

    try {
        $bdd->query($sql);
        echo "200";
    } catch (Exception $e) {
        echo $e->getCode();
    }
}
