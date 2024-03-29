let countEl = document.getElementById("count-me"); //todo Gets the element of the text/number for the count

let saveEl = document.getElementById("save-el"); //todo Gets the element of a text for the Save button

let dateNow = document.getElementById("date-el"); //todo Gets the element that specifies date


let btnClick = 0; 

let count = 0; //todo initializes count to zero
let previousCount = 0; //todo Checks count for comparison

function increment(){ //todo Function for the Increment button, to increment count.
    count += 1; //todo Adds 1 to each count.
    countEl.innerHTML = count; //todo Prints the current count to the element.
}

function save(){ //todo Function for the save button
       const currentDate = new Date();
       const year = currentDate.getFullYear();
       const month = String(currentDate.getMonth() + 1).padStart(2, '0'); //* Months are zero-based
       const day = String(currentDate.getDate()).padStart(2, '0');
  let entryCount = count + " - "; //*saves the current count and adds a dash (-)

  dateNow.style.display = "block"; //todo Displays the Date
  dateNow.innerHTML = `${year}-${month}-${day}`; //todo Prints the date


  if(count === previousCount){
    //todo Shows the bootstrap toast if numbers are repeated
      let myToast = new bootstrap.Toast(document.getElementById('myToast'));

      myToast.show();

  }
  else{
      //todo But if the numbers are not repeated, it executes the else statement
      previousCount = count; //todo assigns the count to the variable previousCount
      saveEl.innerHTML = saveEl.innerHTML + " " + entryCount; //todo Prints the saved Entries
      btnClick = 0; //todo resets the double-clicking condition in the Clear Function
  }

}


//todo CODE TO CLEAR AND SET THE COUNT INTO ZERO, RESETTING THE WHOLE FUNCTION EXCEPT FOR THE SAVE ENTRIES
function clear(){
    btnClick++;
    count = 0; //todo set the count to zero
    countEl.innerHTML = count; //todo prints the zero count
    previousCount = 0; //todo sets the previous count to zero so you can repeat numbers if you clear a count


    if(btnClick === 2){
      saveEl.innerHTML = saveEl.innerHTML = ""; //todo Removes the paragraph text of the previous entry
      let saveText = saveEl.innerText; //todo  gets the content or value of the save-el element and stores it in this variable
      let newText = saveText.replace(/\d+ - /g, ''); //todo Remove the numbers from the text using a regular expression
      saveEl.innerText = "Previous Entries: " + newText; //todo Update the text content of the save-el element with the modified text

      btnClick = 0;

    }
}


var clearButton = document.getElementById('clear-btn'); //todo gets the element of the button to clear
clearButton.addEventListener('click', clear); //todo adds execution of the clear button and executes the
                                              //todo  clear function


