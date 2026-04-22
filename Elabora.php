<?php

$action = $_POST["action"];

if ($action == "getStarterDeck") {
    $classType = $_POST["classType"];
    switch ($classType) {
        case "Atleta":
            $file = json_decode(file_get_contents("carteAtletaIniziali.json"), true);
            break;
        case "Baseball":
            $file = json_decode(file_get_contents("carteBaseballIniziali.json"), true);
            break;
        case "Calciatore":
            $file = json_decode(file_get_contents("carteCalciatoreInizial.json"), true);
            break;
    }
}
