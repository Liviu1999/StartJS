let counts = document.getElementById("count")
let saveEl = document.getElementById("save-el")


let count = 0



function increment(){
    count = count + 1;
    counts.textContent = count;
    
}

function save(){
    let contains = count + " - ";
    saveEl.textContent += contains;
    counts.textContent = 0;
    count = 0;
}

