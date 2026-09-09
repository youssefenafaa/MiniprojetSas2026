const prompt = require("prompt-sync")();
let tickets=[];
let IdCont=1;
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

function affichtraj(){
    for(let i=0; i<=trips.length-1;i++){
        console.log("id:"+ trips[i].id);
        console.log("depar:"+ trips[i].departure );
        console.log("destination:"+ trips[i].destination);
        console.log("depar Time:"+trips[i].departureTime);
        console.log("arrival Time :"+ trips[i].arrivalTime);
        console.log("price:"+ trips[i].price );
        console.log("availableseats:"+trips[i].availableSeats)
    }
}

function achetticket(){
    //le nom de letullisareur

    let nom;
    let idtrajet;
     do {
         nom =prompt("nom du passager:")
}while(nom.trim() ==="");
  //id  du trajet
do {
     idtrajet =Number(prompt("id de trajet :"))
}while(isNaN(idtrajet));



//pour recherche id du trajet est il exicete et est ce que availableseat existe
let i=0;
let v= false ;

for ( ;i<=trips.length-1;i++){
    if(idtrajet==trips[i].id ){
        if(trips[i].availableSeats >= 1) {
        v=true;
        break; 
        }
 }}
    
    if(v==false){
       console.log("trajet introuvable") }
    else{
       //le ticket
        let ticket={
    id: IdCont++,
    name:nom,
    tripId:idtrajet,
    trajet:trips[i].departure + "--->" + trips[i].destination,            
    seatNumber:51-trips[i].availableSeats,
    price: trips[i].price
   }
tickets.push(ticket);
trips[i].availableSeats--;
console.log("ticket achete en succes");
console.log(ticket);
} }   

function affichticket(){
    for (let i=0;i<=tickets.length-1;i++){
        console.log(tickets[i]);
       }
}

function annuleticket(){
    let idannule;
    let fond=false;
    idannule=Number(prompt("enter votre id ---->"))
    for(let i=0;i<=tickets.length-1;i++){
        if(idannule==tickets[i].id){
            fond=true;
            tickets.splice(i,1);
            trips[i].availableSeats++;
            console.log("ticket anulle en succes");
            break;
        }
    }
    if(fond==false){
        console.log("id introuvable");
    }
}

function recherchticket(){  
    let nomrech;
    let trouv=false;
    do {
         nomrech =prompt("nom du passager:")
}   while(nomrech.trim() ==="");

for(let i=0;i<=tickets.length-1;i++){
    if(nomrech==tickets[i].name){
        console.log(tickets[i]);
        trouv=true;
        break;
    }
    }
  if(trouv==false){
        console.log("nom est n'est pas connue");

    }
    

}















       























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