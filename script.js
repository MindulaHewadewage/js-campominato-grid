// Funzione per creare una cella
function createCell(content){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.append(content);
    return cell;
}



// Prendo gli elementi dal DOM
const button = document.getElementById('button');
const sectionBackground = document.getElementById('section-background');
const grid = document.getElementById('grid'); 

// struttura della griglia
const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// Aggancio il bottone
button.addEventListener('click', function (){

    // levo il display none 
    // sectionBackground.classList.add('d-none');

    // si riportano le celle in pagina
    for(let i = 1; i < totalCells; i++){

        // creo una cella
        const cell = createCell(i);


        // Event listener alla cella
        cell.addEventListener('click' , function (){
            cell.classList.add('clicked');
        })

        // appendo in pagina
        grid.appendChild(cell);
    }

})