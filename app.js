let countEl = document.getElementById("count-me"); //Gets the element of the text/number for the count

let saveEl = document.getElementById("save-el"); //Gets the element of a text for the Save button

let dateNow = document.getElementById("date-el"); //Gets the element that specifies date

let btnClick = 0; 

let count = 0; //initializes count to zero
let previousCount = 0; //Checks count for comparison

function increment(){ //Function for the Increment button, to increment count.
    count += 1; //Adds 1 to each count.
    countEl.innerHTML = count; //Prints the current count to the element.
}

function save(){ //Function for the save button
  let currentDate = new Date(); //gets the date 
  let entryCount = count + " - "; //saves the current count and adds a dash (-)

  dateNow.style.display = "block"; //Displays the Date
  dateNow.innerHTML = currentDate; //Prints the date

  if(count === previousCount){
      //Sets a condition that if the numbers are save multiple times, it is invalid
      alert("INVALID, NUMBERS MUST NOT BE REPEATED, CLICK THE CLEAR BUTTON FIRST!", "danger");
  }
  else{
      //But if the numbers are not repeated, it executes the else statement
      previousCount = count; //assigns the count to the variable previousCount
      saveEl.innerHTML = saveEl.innerHTML + " " + entryCount; //Prints the saved Entries
      btnClick = 0; //resets the double-clicking condition in the Clear Function
  }

}


//CODE TO CLEAR AND SET THE COUNT INTO ZERO, RESETTING THE WHOLE FUNCTION EXCEPT FOR THE SAVE ENTRIES
function clear(){
    btnClick++;
    count = 0; //set the count to zero
    countEl.innerHTML = count; //prints the zero count
    previousCount = 0; //sets the previous count to zero so you can repeat numbers if you clear a count


    if(btnClick === 2){
      saveEl.innerHTML = saveEl.innerHTML = ""; //Removes the paragraph text of the previous entry
      let saveText = saveEl.innerText; // gets the content or value of the save-el element and stores it in this variable
      let newText = saveText.replace(/\d+ - /g, ''); //Remove the numbers from the text using a regular expression
      saveEl.innerText = "Previous Entries: " + newText; //Update the text content of the save-el element with the modified text

      btnClick = 0;

    }
}


var clearButton = document.getElementById('clear-btn'); //gets the element of the button to clear
clearButton.addEventListener('click', clear); //adds execution of the clear button and executes the
                                              // clear function


//-------------------------------------------------------
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert" style="font-size: 1.2rem;">`,
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

