/* FUNZIONE CREAZIONE CELLE CON 2 ARGOMENTI (I, DIFFICOLTA') */
const getcellElements = (numberDiffuculty, difficulty) => {

    /* CREO UNA VARIBILE E USO IL METODO MANIPOLAZIONE DOM PER CREARE UN DIV */
    const node = document.createElement('div');

    /* SE LA DIFICOLTA' SCELTA DALL'UTENTE E' IDENTICA A 1  */
    if (difficulty === '1') {


        /* ASSEGNO ALLA VARIBILE NODE UNA CLASSE HTML */
        node.className = 'cell-difficult';


        /* SE ALTRIMENTI LA DIFICOLTA' SCELTA DALL'UTENTE E' IDENTICA A 2  */
    } else if (difficulty === '2') {


        /* ASSEGNO ALLA VARIBILE NODE UNA CLASSE HTML */
        node.className = 'cell-medium';


        /* SE ALTRIMENTI LA DIFICOLTA' SCELTA DALL'UTENTE E' IDENTICA A 3  */
    } else if (difficulty === '3') {


        /* ASSEGNO ALLA VARIBILE NODE UNA CLASSE HTML */
        node.className = 'cell-easy';

    }


    /* STAMPO IN PAGINA IL NUMERO DELLE CELLE (I) */
    node.innerText = numberDiffuculty;


    /* RESTITUISCO NODE */
    return node;

}

