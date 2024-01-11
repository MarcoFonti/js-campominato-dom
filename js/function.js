// FUNZIONE DIFICOLTA DIFFICILE
const getcellElements = (numberDiffuculty, difficulty) => {
        const node = document.createElement('div');
        
        if (difficulty === '1') {
            node.className = 'cell-difficult';
        } else if (difficulty === '2') {
            node.className = 'cell-medium';
        } else if (difficulty === '3') {
            node.className = 'cell-easy';
        }
        node.innerText = numberDiffuculty;
        return node;

}

