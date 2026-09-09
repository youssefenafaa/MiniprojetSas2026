const prompt = require("prompt-sync")();


function main() {
    let choix;
    do{

console.log("=================================");
       console.log("           RAILWAY MANAGER          ");
console.log("=================================");

console.log("1. Afficher les trajets ");
console.log("2. Acheter un ticket ");
console.log("3. Afficher les tickets");
console.log("4. Annuler un ticket ");
console.log("5. Rechercher un ticket");
console.log("6. Filtrer les trajets");
console.log("7. Trier les trajets");
console.log("0. Quitter");


choix = Number(prompt("tapez un choix (0-7)---->"));

switch(choix){
    case 1: 
    affichtraj();
    break;
    case 2:
    achetticket();
    break;
    case 3:
    affichticket();
    break;
    case 4:
    annuleticket();
    break;
    case 5:
    recherchticket();
    break;
    case 6:
    filtretrajets();      
    break;
    case 7:
    trietrajets();
    break;
    case 0:
        break;

   default :
console.log("votre reponse n'etait pas acceptale, svp donne moi une choix entre (0-7)");
break;

}
    } while(choix!=0);
}
main();