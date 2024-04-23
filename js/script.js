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


/* RECUPERO ELEMENTI */
const formElement = document.getElementById('form');
const selectField = document.getElementById('recipe-select');
const buttonField = document.querySelector('.recipe-button');
const squaresElement = document.querySelector('.recipe-squares');
const scoreElement = document.getElementById('score');
const cardElement = document.getElementById('card-not-play')

/* CONTROLLO RISPOSTA */
console.log(formElement, selectField, buttonField, squaresElement, scoreElement);


/* CREO VARIBILE CHE POSSO MANIPOLARE */
let rows;
let cols;
let bombs;


/* CREO UN EVENTO AL SUMBIT SUL FORM */
formElement.addEventListener('submit', (e) => {



    /* BLOCCO LA PAGINA DAL CARICAMENTO */
    e.preventDefault();


    /* CAMBIO TESTO AL BOTTONE PLAY */
    buttonField.innerText = 'Ricomincia'


    /* EVENTO AL CLICK SUL BOTTONE  */
    buttonField.addEventListener('click', () => {


        /* SE CLICCATO AZZERO IL CONTENUTO CHE ANDRO A METTERE DENTRO (CELLE) */
        squaresElement.innerText = ''


        /* AGGIUGNO LA CLASSE D-NONE ALLA CARD DEL MESSAGGIO (NON GIOCARE) */
        cardElement.classList.add('d-none');

    })


    /* RECUPERO IL VALUE CHE MI FORNISCE L'UTENTE TRAMITE SELECT */
    const difficulty = selectField.value;


    /* CON IL METODO SWITCH POSSO DARE VARI CASI ALLA VARIBILE DIFFICULTY  */
    switch (difficulty) {


        /* MANIPOLO LE VARIBILE PER SVARIATI VALORI */

        case '1':
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

    /* SE ESISTE UNA DIFFICULTA' SCELTA DALL'UTENTE */
    if (difficulty) {
        /* AGGINGO UNA CLASSE PER IL COLORE DELLO SFONDO DELLE CELLE */
        squaresElement.classList.add('color-back')
    }


    /* CREO UNA VARIBILE CHE MI DA IL TOTALE DELLE CELLE */
    const tot = rows * cols


    /* CREO VARIBILE PER PUNTEGGIO DI VINCITA'  */
    const maxPoints = tot - bombs


    /* CONTROLLO RISPOSTA */
    console.log('celle da creare: ', tot);
    console.log('difficolta scelta: ', difficulty);



    /* CREO UN ARRAY IN CUI METTERCI DENTO LE VARIE BOMBE */
    const arrayBombs = []


    /* FINCHE' LA LUNGHEZZA DELL'ARRAY CREAO E' MINORE RIEMPI L'ARRAY   */
    while (arrayBombs.length < bombs) {


        /* CREO NUMERI RANDOM CON UN MASSIMO DI CELLE SELEZIONATE (TOT) */
        const randomBombs = Math.floor(Math.random() * tot) + 1


        /* SE NELL'ARRAY NON E' INCLUSO IL NUMERO RANDOM CREATO */
        if (!arrayBombs.includes(randomBombs)) {

            /* METTILO DENTRO */
            arrayBombs.push(randomBombs);

        }

    }


    /* CONTROLLO RISPOSTA */
    console.log('celle dove sono le bombe: ', arrayBombs);


    /* CREO VARIBILE DA MANIPOLARE */
    let score = 0;


    /* STAMPO IN PAGINA LA VARIBILE */
    scoreElement.innerText = score


    /* CILO SU IL TOTALE DELLE CELLE CHE L'UTENTE SELEZIONA E INCREMENTO DI 1 */
    for (let i = 1; i <= tot; i++) {


        /* ASSEGNO ALLA VARIBILE LA FUNZIONE GETCELLELEMENTS E GLI PASSO COME ARGOMENTI LA I E LA DIFFICOLTA' SCELTA */
        const eventCell = getcellElements(i, difficulty);


        /* AGGIUNGO ALL'EMELENTO SQUERESELEMENTE OGNI SINGOLA CELLA(DIV) CHE CREO (DETTO NODO) */
        squaresElement.appendChild(eventCell);


        /* CREO UN EVENTO AL CLICK SULLA SINGOLA CELLA */
        eventCell.addEventListener('click', () => {


            /* SE LA CELLA CONTEINE IL CLICK FACCIO IN MODO CHE L'UTENTE NON POSSA RICLICCARLA */
            if (eventCell.classList.contains('clicked')) return;


            /* AGGIUNGO ALLLA SINGOLA CELLA LA CLASSE CLICKED  */
            eventCell.classList.add('clicked')

            /* AGGIUGNO ALLA CELLA CLICCCATA IL COLORE DEL TESTO NERO */
            eventCell.classList.add('text-black')


            /* CREO UNA VARIBILE IN CUI ASSEGNO SE NELL'ARRAY DELLE BOMBE E' INCLUSO IL NUMERO DELLA CELLA */
            const bombclick = arrayBombs.includes(parseInt(eventCell.innerText));


            /* SE LA VARIBILE VIENE MESSA IN CAUSA */
            if (bombclick) {


                /* CREO MESSAGGIO DI CONFERMA DI FALLIMENTO */
                const result = window.confirm('Hai perso! Hai fatto ' + score + ' punti. Vuoi riprovare?');

                /* SE ESTISTE UN MESSAGGIO DI CONFERMA */
                if (result) {


                    /* RICARICA LA PAGINA */
                    window.location.reload();


                    /* ALTRIMENTI */
                } else {


                    /* RIMUOVI LO SFONDO DELLE CELLE */
                    squaresElement.classList.remove('color-back')


                    /* RIMUOVI LA CALSSE D-NONE ALLA CARD DEL MESSAGGIO (NON GIORARE) */
                    cardElement.classList.remove('d-none');
                }

                
                /* AGGIUNGO ALLE CELLA CLICCATA UNA CLASSE HTML */
                eventCell.classList.add('color-cell-red');


                /* AZZERO IL CONTENUTO CHE ANDRO A METTERE DENTRO (CELLE) */
                squaresElement.innerText = ''


                /* SE PERSO RIASSEGNO LO SCORE A 0 */
                scoreElement.innerText = 0


                /* RIMUOVO AL NUMERO SCORE UNA CLASSE HTML */
                scoreElement.classList.remove('color-green')


                /* CONTROLLO RISPOSTA */
                console.log(eventCell.innerText);


                /* ALTRIMENTI */
            } else {


                /* AGGIUNGO ALLE CELLA CLICCATA UNA CLASSE HTML */
                eventCell.classList.add('color-cell-green')


                /* CONTROLLO RISPOSTA */
                console.log(eventCell.innerText);


                /* AGGIUNGO AL NUMERO SCORE UNA CLASSE HTML */
                scoreElement.classList.add('color-green')


                /* STAMPO IN PAGINA LA VARIBILE SCORE INCREMENTADO DI 1 */
                scoreElement.innerText = ++score
            }


            /* CONTROLLO RISPOSTA */
            console.log(score);


            /* SE SE LA VARIABILE MAXPOINTS E' IDENTICA A SCORE */
            if (maxPoints === score) {


                /* ALERT DI VINCITA' */
                alert('HAI VINTO!! HAI FATTO ' + score + ' PUNTI');

            }

        })

    }

})








