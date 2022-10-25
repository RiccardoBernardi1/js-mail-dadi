"use strict"
// 1. Generare un numero random da 1 a 6 per il giocatore
// 2. Generarne un secondo per il computer
// 3. Verificare quale sia il maggiore tra i due
// 4. Stampare il vincitore in base a chi aveva il numero più alto
let playerNumber=Math.floor(Math.random() * 6) + 1;
console.log(playerNumber);
let pcNumber=Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);
if (playerNumber>pcNumber){
    alert("HAI VINTO !!!!!!!");
}else if(pcNumber>playerNumber){
    alert("HAI PERSO, RITENTA SARAI PIU FORTUNATO!");
}else{
    alert("PAREGGIO");
}