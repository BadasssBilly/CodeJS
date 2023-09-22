"use strict";

function direbonjour(prenom){
    console.log("Bonjour " + prenom) 
}
direbonjour("Bob");
direbonjour("Billy");
direbonjour("Martine");
direbonjour("Jean");
direbonjour("Jacques");
direbonjour("Alex");
direbonjour("John");
direbonjour("Roméo");
direbonjour("Rebecca");
direbonjour("Jules");

//Bonne méthode :

for(let i=10;i>=1;i--){
    console.log(i);
}
for(let i=10;i>=0;i--){
    if(i==0)
    console.log("Bonne année !");
}
