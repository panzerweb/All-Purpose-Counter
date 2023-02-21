let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");

let count = 0;
let previousCount = 0;

function increment(){
    count += 1;
    countEl.innerHTML = count;
}