// Funzione per creare una cella
function createCell(){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
}



// Prendo gli elementi dal DOM
const button = document.getElementById('button');
const sectionContainer = document.getElementById('section-container');
const grid = document.getElementById('grid'); 

// struttura della griglia
const rows = 8;
const cols = 8;
const totalCells = rows * cols;

// Aggancio il bottone
button.addEventListener('click', function (){

    // levo il display none 
    sectionContainer.classList.remove('d-none');

    // si riportano le celle in pagina
    for(let i = 0; i > totalCells; i++){

        // creo una cella
        createCell();
    }


})