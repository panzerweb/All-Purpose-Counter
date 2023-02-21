let countEl = document.getElementById("count-me");

let saveEl = document.getElementById("save-el");

let count = 0;
let previousCount = 0;

function increment(){
    count += 1;
    countEl.innerHTML = count;
}

function save(){
    let entryCount = count + " - ";

    if(count === previousCount){
        alert("MULTIPLE ENTRIES DETECTED!!!");
    }
    else{
        previousCount = count;
        saveEl.innerHTML = saveEl.innerHTML + " " + entryCount;
    }
}

console.log("hello world");