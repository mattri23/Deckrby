<?php

$action = $_POST["action"];

if ($action == "getStarterDeck") {
    $classType = $_POST["classType"];
    switch ($classType) {
        case "Atleta":
            $file = fopen("carteAtletaIniziali.txt", "r");
            break;
        case "Baseball":
            $file = fopen("carteBaseballIniziali.txt", "r");
            break;
        case "Calciatore":
            $file = fopen("carteCalciatoreIniziali.txt", "r");
            break;
    }
}