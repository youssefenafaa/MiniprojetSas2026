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
}while(nom ==="");
  //id  du trajet
do {
     idtrajet =Number(prompt("id de trajet :"))
}while(isNaN(idtrajet));



//pour recherche id du trajet est il exicete 
let i=0;
let v= false ;
   
for ( ;i<=trips.length-1;i++){
     //premier condition id est il exicete

      if(idtrajet==trips[i].id ){
         v=true;
     
     // est ce que availableseat existe  
      if(trips[i].availableSeats >= 1) {
    
    //cree  ticket
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
console.log(ticket);}
else {
    console.log("train complet");

}       break; }  }
if(v==false){
       console.log("trajet introuvable") }
 }
    
    
    




function affichticket(){
    for (let i=0;i<=tickets.length-1;i++){
        console.log(tickets[i]);
        console.log(" === TICKETS ===");

        console.log("Ticket #" + tickets[i].id);
        console.log(" Passager : "+tickets[i].name);
         console.log ("Trajet:"+tickets[i].trajet);
        console.log("Place : "+tickets[i].seatNumber);
        console.log ("Prix :"+ tickets[i].price +"DH");
       }
}

function annuleticket(){
    let idannule;
    let fond=false;
    
    
    idannule=Number(prompt("enter votre id ---->"))
  
    for( let i=0;i<=tickets.length-1;i++){
        if(idannule==tickets[i].id){ //ticket qui enter l'utilisateur ==tickets.ID
            fond=true;

            for(let j=0;j<trips.length;j++){  //availabeseats ++ ;
                if(tickets[i].tripId==trips[j].id){
                  trips[j].availableSeats++;
                break;
                }
                }
               }
                        tickets.splice(i,1);
            }
          console.log("ticket anulle en succes");
                
                       
                    
            if(fond===false){
        console.log("id introuvable");
    }   
                    }
                     
                     
           
           

        
    



function recherchticket(){  
    let nomrech;
    let trouv=false;
    do {
         nomrech =prompt("nom du passager:")
}   while(nomrech ==="");

for(let i=0;i<=tickets.length-1;i++){
    if(nomrech==tickets[i].name){
        
        console.log("Ticket #" + tickets[i].id);
        console.log(" Passager : "+tickets[i].name);
        console.log ("Trajet:"+tickets[i].trajet);
        console.log("Place : "+tickets[i].seatNumber);
        console.log ("Prix :"+ tickets[i].price  + " DH");
        trouv=true;
        break;
    }
    }
  if(trouv==false){
        console.log("nom est introuvable");

    }
    

}

function  filtretrajets(){

let villenom;
 let trouvee=false;
    do {
         villenom=prompt("nom du ville:")
}      while(villenom ==="");

for (let i=0;i<trips.length;i++){
    if(villenom.toLowerCase()==trips[i].departure.toLowerCase()){
        console.log(trips[i].departure +"--->"+ trips[i].destination +":"+trips[i].price);
                  trouvee=true;
                   
    }
}
if(trouvee==false){
    console.log("aucun ville de ce nom");
}
}

function trietrajets(){
    for (let j=0;j<=trips.length-1;j++){
    for (let i=0;i < trips.length-1; i++){
    if(trips[i].price > trips[i+1].price){
        let temp =trips[i+1];
        trips[i+1] = trips[i];
        trips[i]=temp;

    }
    } 
  }
console.log(trips);



}




//bonus
function statistique(){
    do{
console.log("=============================================" );    
console.log("1.Nombre total de tickets vendus");
console.log("2.Chiffre d'affaires total");
console.log("3. return a menu principale");

st=Number(prompt("taper votre choix entre (1-3)--->"));

switch(st){
   case 1: nombreTotaleticketsvendu();
   break;
   case 2: chifffreAffaireTotal();
   break;
   case 3: 
    break;
    
       default :
console.log("votre reponse n'etait pas acceptale, svp donne moi une choix entre (1-3)");
break;

}   
}while(st!=3);
}

function nombreTotaleticketsvendu(){
    console.log("Nombre total de tickets :"+ tickets.length);
}
function chifffreAffaireTotal(){
    let totale=0;
    for(i=0;i<=tickets.length-1;i++){
        totale+=tickets[i].price;
    }
    console.log("chaiffr d'affaire total :"+totale);
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
console.log("8. les statistique")
console.log("0. Quitter");


choix = Number(prompt("tapez un choix (0-8)---->"));

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
    case 8:
     statistique();
     break;
    case 0:
        break;

   default :
console.log("votre reponse n'etait pas acceptale, svp donne moi une choix entre (0-8)");
break;

}
    } while(choix!=0);
}
main();