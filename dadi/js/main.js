"use strict"
// 1. Generare un numero random da 1 a 6 per il giocatore
// 2. Generarne un secondo per il computer
// 3. Verificare quale sia il maggiore tra i due
// 4. Stampare il vincitore in base a chi aveva il numero più alto
const button=document.getElementById("button");
button.addEventListener("click",function(){
    let playerNumber=Math.floor(Math.random() * 6) + 1;
    console.log(playerNumber);
    document.getElementById("player-number").innerHTML=playerNumber;
    document.getElementById("player-number").classList.remove("d-none");
    let pcNumber=Math.floor(Math.random() * 6) + 1;
    console.log(pcNumber);
    document.getElementById("pc-number").innerHTML=pcNumber;
    document.getElementById("pc-number").classList.remove("d-none");
    document.getElementById("victory").classList.remove("d-none");
    if (playerNumber>pcNumber){
        document.getElementById("victory").classList.add("win");
        document.getElementById("victory").classList.remove("lose");
        document.getElementById("victory").innerHTML="HAI VINTO !!!";
    }else if(pcNumber>playerNumber){
        document.getElementById("victory").classList.add("lose");
        document.getElementById("victory").classList.remove("win");
        document.getElementById("victory").innerHTML="HAI PERSO !!!";
    }else{
        document.getElementById("victory").classList.remove("win", "lose");
        document.getElementById("victory").innerHTML="PAREGGIO";
    }
});