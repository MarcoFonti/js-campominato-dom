// Check
console.log('JS OK');

// ! SCALETTA 
/*
- 1 Raccogli gli elementi
    - 1a Varaiabile che conosco
- 2 evento al click 
    - 2a Creaiamo uno clico while per le celle
    - 2b Creiamo clico for per le bombe
    - 2c Creiamo le celle
- 3 Creiamo l'evento al click sulla cella
- 4 Stampiamo in pagina
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



formElement.addEventListener('submit', (e) => {

e.preventDefault();

buttonField.innerText = 'Ricomincia'

buttonField.addEventListener('click', ()=>{
    squaresElement.innerText = ''
    scoreElement.innerText = ''
})

const difficulty = selectField.value;

switch (difficulty) {

    case '1' :
        rows = 10;
        cols = 10;
        bombs = 16;
        break;
    
    case '2':
        rows = 9;
        cols = 9;
        bombs = 18;
        break;

    case '3':
        rows = 7;
        cols = 7;
        bombs = 20;
        break;
}

const tot = rows * cols

console.log('celle da creare: ', tot);

console.log('difficolta scelta: ', difficulty);

const arrayBombs = []

while (arrayBombs.length < bombs) {
    const randomBombs = Math.floor(Math.random()* tot ) + 1
    if (!arrayBombs.includes(randomBombs)) {
        arrayBombs.push(randomBombs);
    }
}

console.log('numero bombe: ', arrayBombs);

let score = 0;

for (let i = 1; i <= tot; i++) {

const eventCell = getcellElements(i,difficulty);

squaresElement.appendChild(eventCell);

eventCell.addEventListener('click', () => {

const bombclick = arrayBombs.includes(parseInt(eventCell.innerText))

    if (bombclick) {
        alert('Hai perso! Vuoi riprovare?')
        eventCell.classList.add('color-cell-red')
        console.log(eventCell.innerText);
    } else {
        eventCell.classList.add('color-cell-green')
        console.log(eventCell.innerText);
        scoreElement.innerText = ++score
    }
})

}

})








