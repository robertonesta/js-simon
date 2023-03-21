/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/
const playEl = document.querySelector(".go")

const numberlist = document.querySelector(".list")


//timer 30 secondi
playEl.addEventListener("click", function(){
    const newNumbers = randomNumbers();
    setTimeout(() => {
        
    }, 3000);
    
})

//array dei numeri random

function randomNumbers(){
    const numbers = [];
    while (numbers.length < 5){
        const number = Math.floor(Math.random() * 100);
        if(!numbers.includes(number)){
            numbers.push(number);
        }
    }
    return numbers;
}