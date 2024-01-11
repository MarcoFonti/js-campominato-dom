// Check
console.log('JS OK');


// ! SCALETTA 
/*
- 1 Raccogli gli elementi
    - 1a Varaiabile che conosco
- 2 evento al click 
- 3 Recupero valori utente
- 4 Creaiamo uno clico while per le celle
- 5 Creiamo clico for per le bombe
- 6 Creiamo le celle 
- 7 Creiamo l'evento al click sulla cella
- 8 Stampiamo in pagina
*/


// RECUPERO ELEMENTI
const formElement = document.getElementById('form');
const selectField = document.getElementById('recipe-select');
const buttonField = document.querySelector('.recipe-button');
const squaresElement = document.querySelector('.recipe-squares');
const scoreElement = document.getElementById('score');

console.log(formElement, selectField, buttonField, squaresElement, scoreElement);

// VARIABILI CHE CONOSCO
let rows;
let cols;
let bombs;

// EVENTO AL CLICK
formElement.addEventListener('submit', (e) => {

// BLOCCO LA PAGINA DAL CARICAMENTO
e.preventDefault();

// CAMBIO TESTO AL BOTTONE 
buttonField.innerText = 'Ricomincia'

// EVENTO AL BOTTONE RICOMINCIA 
buttonField.addEventListener('click', ()=>{
    squaresElement.innerText = ''
})

// RECUPERO VALORI SELECT 
const difficulty = selectField.value;

// MODALITA' DI GIOGO 
switch (difficulty) {

    case '1' :
        rows = 7;
        cols = 7;
        bombs = 20;
        break;
    
    case '2':
        rows = 9;
        cols = 9;
        bombs = 18;
        break;

    case '3':
        rows = 10;
        cols = 10;
        bombs = 16;
        break;
}

// VARIABILE TOT CELLE 
const tot = rows * cols

// VARIABILE MASSIMO DEI PUNTI
const maxPoints = tot - bombs

console.log('celle da creare: ', tot);

console.log('difficolta scelta: ', difficulty);

// CREO BOMBE 
const arrayBombs = []

while (arrayBombs.length < bombs) {
    const randomBombs = Math.floor(Math.random()* tot ) + 1
    if (!arrayBombs.includes(randomBombs)) {
        arrayBombs.push(randomBombs);
        
    }
}

console.log('celle dove sono le bombe: ', arrayBombs);

// INCREMENTO IL PUNTEGGIO 
let score = 0;
scoreElement.innerText = score

// CREO LE CELLE 
for (let i = 1; i <= tot; i++) {

const eventCell = getcellElements(i,difficulty);

squaresElement.appendChild(eventCell);

// EVENTO ALLA CASELLA
eventCell.addEventListener('click', () => {

    // FACCIO IN MODO CHE L'UTENTE NON POSSA RICLICCARE 
    if (eventCell.classList.contains('clicked')) return;

    eventCell.classList.add('clicked')

    // GUARDO NELLE CASELLA QUALI NUMERI SIANO LE BOMBE 
    const bombclick = arrayBombs.includes(parseInt(eventCell.innerText));

    // CREO COLORE CELLE E MESSAGGIO SCONFITTA 
    if (bombclick) {
        confirm('Hai perso! Hai fatto ' + score + ' puni,  Vuoi riprovare?')
        eventCell.classList.add('color-cell-red')
        console.log(eventCell.innerText);
    } else {
        eventCell.classList.add('color-cell-green')
        console.log(eventCell.innerText);
        scoreElement.innerText = ++score
    }

    console.log(score);

    // MESSAGGIO DI VITTORIA 
    if (maxPoints === score) {
        alert('HAI VINTO!! HAI FATTO ' + score + ' PUNTI');
    }

})

}

})








