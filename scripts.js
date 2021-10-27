/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// Creare 5 numeri random
// Aspettare 30 secondi e chiedere all'utente 5 numeri
// Verificare se tra i numeri inseriti dall'utente c'è qualcuno che corrisponde ai numeri random generati
// Comunicare all'utente quanti e quali numeri sono stati indovinati

// Creo una funzione che mi permette di generare dei numeri random impostando un valore minimo e un valore massimo
function generateRandomNum(minNumber, maxNumber) {
    const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return numRandom;
}

// Dichiaro un array vuoto dove inserire i 5 numeri random
const numeriRandom = [];
// Dichiaro un array vuoto dove inserire i 5 numeri random inseriti dall'utente
const numeriRandomUtente = [];

// Ripeto il ciclo 5 volte, ed ogni volta pusho un numero random nell'array numeriRandom
for (let i = 0; i < 5; i++) {
    numeriRandom.push(generateRandomNum(1, 100))
}
// Stampo i numeri random
alert(numeriRandom);

setTimeout(arrayNumeriRandomUtente, 1000);


function arrayNumeriRandomUtente(){

    while(numeriRandomUtente.length < 5){
        let numeroScelto = parseInt(prompt("Inserisci un numero"));
        if(isNaN(numeroScelto)){
            alert("Hai sbagliato. Devi inserire un numero");
            return
        }

        numeriRandomUtente.push(numeroScelto);
    }
    console.log(numeriRandomUtente);

}