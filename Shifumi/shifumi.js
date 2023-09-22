"use strict";
let choixUtilisateur = prompt("Quelle valeur choisissez-vous ? Pierre, feuille ou ciseaux");
choixUtilisateur = choixUtilisateur.toLowerCase();
let ordi;
let choixOrdi;

ordi = (Math.floor(Math.random() * 3) + 1);

console.log(ordi);

switch(ordi){
    case 1:
        choixOrdi = "pierre";
    break;
    case 2:
        choixOrdi = "feuille";
    break;
    
    case 3:
        choixOrdi = "ciseaux";
    break;
}
console.log(choixOrdi);

if( choixUtilisateur == choixOrdi){
    document.write("Vous êtes à égalité !")
}
else{
    switch(choixUtilisateur){

        case "pierre":
            if(choixOrdi == "feuille"){
                document.write("L'ordinateur a choisi feuille donc l'ordinateur à gagné"+ '<i class="fas fa-grin-squint-tears"></i>')
            }
            else{
                document.write("L'ordinateur a choisi ciseaux donc l'ordinateur à perdu" + '<i class="fas fa-sad-tear"></i>')
            }
        
        break;       
            
        case "feuille":
            if(choixOrdi == "ciseaux"){
                document.write("L' ordinateur a choisi ciseaux donc l'ordinateur à gagné !"+'<i class="fas fa-grin-squint-tears"></i>')
            }
            else{
                document.write("L' ordinateur a choisi pierre donc l'utilisateur à gagné !"+'<i class="fas fa-grin-squint-tears"></i>')
            }
        break;     
            
        case "ciseaux":
            if(choixOrdi == "pierre"){
                document.write("L'ordinateur a choisi pierre donc l'ordinateur à gagné !"+'<i class="fas fa-grin-squint-tears"></i>')
            }
            else{
                document.write("L'ordinateur a choisi papier donc l'utilisateur à gagné !")
            }
        break;
            
    }
}