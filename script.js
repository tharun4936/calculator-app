let person = "tarun";
person[0] = 'v';
console.log(person);
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = calculator.querySelector(".calculator__display");
const displayEntry = display.querySelector(
  ".calculator__display_entry"
);
const displayResult = display.querySelector(".calculator__display_result");
let lastIndex;
let lastValue;
let isDepressed=false;


keys.addEventListener("click", (e) => {
  const key = e.target;
  const operators = "+-*/";
  const action = key.dataset.action;

  if (!action) {  
    console.log(displayResult.textContent)     ;                                           //key is a  number
    if (displayEntry.textContent !== "0") {
      displayEntry.textContent += key.textContent;
    }
    else{
      displayEntry.textContent = key.textContent;
    }
    lastIndex = displayEntry.textContent.length;
    lastValue = displayResult.textContent[lastIndex-1];
  } 
  else if (key.classList.contains("key--operator")) {             //key is an operator

    // if (displayResult.textContent.length !== 0) {
    //   displayResult.textContent += (displayEntry.textContent + key.textContent);
    //   displayEntry.textContent = "";
    // }
    // // if(!operators.includes(displayResult.textContent[-1])){
    // //   displayResult.textContent[-1] = key.textContent;
    // // }
    // 
    // isDepressed = true;
    // if(operators.includes(lastValue)){
    //   console.log(lastValue);
    // }
    // else{
      console.log(displayResult.textContent);
      if(displayEntry.textContent.length !==0 ){
        if(displayEntry.textContent[0] === '-'){
          displayResult.textContent += ('(' + displayEntry.textContent + ')' + key.textContent);
        }
        else{
          displayResult.textContent += (displayEntry.textContent + key.textContent);
        }
        displayEntry.textContent = "";

      }
      else{
        displayResult.textContent = (displayResult.textContent.slice(0,-1) + key.textContent);
      }
    // }
    lastIndex = displayEntry.textContent.length;
    lastValue = displayResult.textContent[lastIndex-1];

  } 
  else if(action === 'plus-or-minus'){                                //key is "+/-"
    if(displayEntry.textContent.length !== 0){
      if(displayEntry.textContent[0] === '-')   {
        displayEntry.textContent = displayEntry.textContent.slice(1,displayEntry.textContent.length);
      }   
      else{
        displayEntry.textContent = ('-' + displayEntry.textContent);
      }                    
    }                 //key is "+/-"
  }
  else if (action === "clear") {                                  //key is "C"
    displayEntry.textContent = "";
    displayResult.textContent = "";
  } 
  else if(action === 'clear-entry'){                              //key is "CE"
    displayEntry.textContent = "";
  }
  else if (action === "calculate") {                       //key is "="
    if(displayEntry.textContent.length !== 0){
      console.log(displayResult.textContent + '(' + displayEntry.textContent + ')'); 
      displayEntry.textContent = eval(displayResult.textContent + '(' + displayEntry.textContent + ')').toString();
      displayResult.textContent = "";
    }
    else{
      console.log(displayResult.textContent.slice(0,-1))
      displayEntry.textContent = eval(displayResult.textContent.slice(0,-1)).toString();
      displayResult.textContent = "";
    }
  }
  else if(action === "decimal"){
    if(!displayEntry.textContent.includes('.') && displayEntry.textContent.length!==0)
      displayEntry.textContent += '.';
  }
});
