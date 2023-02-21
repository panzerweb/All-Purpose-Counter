let countEl = document.getElementById("count-me");

let saveEl = document.getElementById("save-el");

let dateNow = document.getElementById("date-el");

let count = 0;
let previousCount = 0;

function increment(){
    count += 1;
    countEl.innerHTML = count;
}

function save(){
  let currentDate = new Date();
  let entryCount = count + " - ";

  dateNow.style.display = "block";
  dateNow.innerHTML = currentDate;

  if(count === previousCount){
      alert("INVALID, NUMBERS MUST NOT BE REPEATED", "danger");
  }

  else{
      previousCount = count;
      saveEl.innerHTML = saveEl.innerHTML + " " + entryCount;
  }
}


//CODE TO CLEAR AND SET THE COUNT INTO ZERO, RESETTING THE WHOLE FUNCTION EXCEPT FOR THE SAVE ENTRIES
function clear(){
    count = 0;
    countEl.innerHTML = count;

}

var clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', clear);


//-------------------------------------------------------
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert" style="font-size: 2rem;">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('save-btn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
  })
}

