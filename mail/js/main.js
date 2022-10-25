"use strict"
// 1. Chiedere all'utente la sua mail
// 2. Controllare se la mail inserita si trova nella lista delle mail
// 3. Stampare un messaggio sul risultato del controllo
const mail= ["giovanni@gmail.com","pierino@gmail.com","giulia@gmail.com"];
const userMail=(prompt("inserisci la tua mail"));
const index=mail.indexOf(userMail);
if (index >= 0){
    alert("la tua mail è nall lista")
}else{
    alert("la tua mail non è nella lista")
}
