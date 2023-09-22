"use strict";


let nombre1=5;
let nombre2=8;
let nombre3="5";

if(nombre1==nombre3){
    alert("Egalité");
}

if(nombre1===nombre3){
    alert("Egalité bis");
}else{
    alert("Echec");
}

if(nombre1==8){
    alert("Je suis le 8");
}else if(nombre1==4){
    alert("Je suis le 4");
}else {
    alert("Je suis un autre chiffre");
}

if(nombre1==5 && nombre2 ==8){
    alert("Un talent mon gars");
}else{
    alert("Nul");
}

if(nombre1==5 || nombre2 ==5){
    alert("Je suis trop fort ou un autre");
}else{
    alert("Nul");
}

switch (nombre1) {
    case 1:
        alert("je suis le chiffre 1");
        break; //faut pas oublier stp sinon ça casse tout
    case 2:
        alert("je suis le chiffre 2");
        break;
    case 3:
        alert("je suis le chiffre 3");
        break;
    case 4:
        alert("je suis le chiffre 4");
        break;
    case 5:
        alert("je suis le chiffre 5");
        break;
    default:
        alert("je suis un autre chiffre");
}