let canvas = document.querySelector('#container');
let numOfBoxes;

let settingsForm = document.querySelector('#settingsForm');
settingsForm.style.display = 'none';

function generateCanvas(){
    if(numOfBoxes != null){
        while(canvas.firstChild){
            canvas.removeChild(canvas.firstChild);
        }
    }
    numOfBoxes = document.querySelector('#numOfBoxes').value;
    makeCanvas(numOfBoxes);
}

function makeSingleRow(canvasSize, numOfBoxes){
    let row = document.createElement('row');
    canvas.appendChild(row);

    for(a = 0; a < numOfBoxes; a++){
        let div = document.createElement('div');
        div.classList.toggle('tile');
        div.style.width = `${((canvasSize/numOfBoxes)-2)}px`;
        div.style.height = `${((canvasSize/numOfBoxes)-2)}px`;
        console.log(canvasSize/numOfBoxes)
        div.style.backgroundColor = 'white';
        div.style.border = '1px solid orange';
        div.style.display = 'inline-block';
        row.appendChild(div);

        div.addEventListener('mouseover',function(e){
            e.target.style.backgroundColor = randomizeColor();
        });
    }
}

function makeCanvas(numOfBoxes){
    let canvasSize = 640.0; //in px
    for(b = 0; b < numOfBoxes; b++){
        makeSingleRow(canvasSize, numOfBoxes); 
    }
}

// below are non-canvas code blocks

function randomizeColor(){
    let r = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
    let g = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
    let b = Math.floor(Math.random() * (255 - 0 + 1) ) + 0;
    return `rgb(${r},${g},${b})`;
}

function toggleSettings(){
    if(settingsForm.style.display == 'none'){
        settingsForm.style.display = 'initial'
    }
    else{
        settingsForm.style.display = 'none';
    }
}