/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/
const playEl = document.querySelector(".go")
const numberlist = document.querySelector(".list")
const labelsEl = document.querySelector(".labelsform")
const result = document.querySelector(".finalPoints")


//timer 30 secondi
playEl.addEventListener("click", function(){
    const newNumbers = randomNumbers();
    NumbersInDom(numberlist, newNumbers)
    setTimeout(() => {
        numberlist.remove();
        labelsEl.style.display = "block";
        userNumbers(newNumbers, labelsEl)
    }, 2000);
    
})

//array dei numeri random

function randomNumbers(){
    const numbers = [];
    while (numbers.length < 5){
        const number = Math.floor(Math.random() * 100) + 1;
        if(!numbers.includes(number)){
            numbers.push(number);
        }
    }
    return numbers;
}

//mostrare i numeri nel DOM

function NumbersInDom (container, elements){
    for (let i = 0; i < elements.length; i++){
        const element = document.createElement("li");
        element.innerText = elements[i]
        container.append(element);
    }
}

//recuperare i numeri dell'user e controllare quali di questi sono corretti

function userNumbers (addedNumbers, form){
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        //array coi numeri giusti
        const correctNumbers = [];
        for (let i = 0; i < 5; i++){
            //evitare che un numero giusto venga inserito più volte per aumentare il punteggio
            if (addedNumbers.includes(Number(e.target[i].value)) && !correctNumbers.includes(Number(e.target[i].value))) {
                correctNumbers.push(Number(e.target[i].value));
        }
        let points = correctNumbers.length;
        outputPoints(result, points, correctNumbers)
        }    
    })
}

//punteggio finale

function outputPoints(outputEl, points, guessed){

    if (points != 0){
        outputEl.innerText = `Hai indovinato ${points} numeri!`
    } else{
        outputEl.innerText = `Non hai indovinato nessun numero`
    }
}

