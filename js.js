let container = document.querySelector('#container');
let numOfRows;
let numOfColumns;

function generateCanvas(){
    if(numOfRows != null){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
    }
    numOfRows = document.querySelector('#rowsField').value;
    numOfColumns = document.querySelector('#colsField').value;
    makeCanvas(numOfRows, numOfColumns);
}

function makeSingleRow(numOfColumns){
    let row = document.createElement('row');
    row.style.display = 'block';
    row.style.margin = '0';
    container.appendChild(row);
    for(a = 0; a < numOfColumns; a++){
        let div = document.createElement('div');
        div.classList.toggle('tile');
        div.style.width = '20px';
        div.style.height = '20px';
        div.style.backgroundColor = 'orange';
        div.style.border = '1px solid black';
        div.style.display = 'inline-block';
        row.appendChild(div);
    }
}

function makeCanvas(numOfRows, numOfColumns){
    for(b = 0; b < numOfRows; b++){
        makeSingleRow(numOfColumns);
    }
}
