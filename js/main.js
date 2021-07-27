let bombe = [];
let myNumUtente = [];
generatore();
console.log(bombe);
let punteggio = 0;
creaCampo(100);
let condizioni = 84;
console.log(punteggio)


// function// function// function// function// function// function// function// function// function// function
    


function creaCampo (celle) {

    for(let i = 1; i <= celle;i++){

        let cella = ` <div data-cella="${i}" class = "cella"></div>
        `;
        let = focusCella = document.createElement("div");
        focusCella.classList.add("quadrato");
        focusCella.innerHTML= cella;
        document.getElementById("campo").appendChild(focusCella);
    }
} 

document.getElementById("campo").addEventListener("click",
    function (e) {
        console.log(e.target.dataset.cella);
        let action = parseInt(e.target.dataset.cella);
        let element = document.querySelectorAll("[data-cella='" + action + "']");
        console.log(element[0]);

        if(bombe.includes(action)) {
            element[0].classList.add("red");
            alert("you lose");
            location.reload();
        }
        else if (myNumUtente.length == condizioni) {
            element[0].classList.add("green");
            alert("you won");
        }
        else 
        {
            element[0].classList.add("green");
            myNumUtente.push(action);
            punteggio+=1;
        }
}
)

// // Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// let myArray = [];
// let myNumUtente = [];
// generatore();
// console.log(myArray);
// var punteggio = 0;
// utente();
// console.log(myNumUtente);
// console.log(punteggio);

// // function// function// function// function// function// function// function// function// function// function// function

function generatore () {
    for(let i = 1;i <= 16;i++){
        let randomico;
        do{
            randomico = random(100,1);
        }while(bombe.includes(randomico));
        bombe.push(randomico);
    }
}

function random (max,min) {
    return Math.floor(Math.random() * max) + min;
}

// function utente () {
//     for (let i = 1;i < 85;i++){
//         let volte;
//         do{
//             volte = parseInt(prompt("Inserisci numeri tra 1 e 100")); 
//             if (volte < 1 || volte > 100){
//                 alert("il numero inserito non è valido")
//             }
//             else if (myNumUtente.includes(volte))
//             {
//                 alert("hai già inserito questo numero")
//             }
//             else if (bombe.includes(volte)){
//                 alert("hai perso")
//                 punteggio -= 1;
//                 return
//             }
//             else if (myNumUtente.length == 85){
//                 alert("hai vinto")
//                 return
//             }
//             else
//             {
//                 myNumUtente.push(volte)
//                 punteggio += 1;
//             }
//         }while(volte >= 1 || volte <= 100 || isNaN(volte))
//     } 
// }

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

