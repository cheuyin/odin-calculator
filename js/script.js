const currentOperation = {
  firstNum: "",
  operator: "",
  secondNum: "",
  equalsButton: false,
  answer: ""
}

const mainLine = document.querySelector(".main-line");

// You press a button, something shows up on the calculator screen
const buttons = document.querySelectorAll(".buttons .row div");
buttons.forEach(button => button.addEventListener("click", (event) => {
  buttonClickHandler(event.target)
}));


function buttonClickHandler(button) {  
  if (button.classList.contains("operator")) {
    currentOperation.operator = button.textContent;
  } else if (button.classList.contains("number")) {
    if (currentOperation.firstNum === "") {
      currentOperation.firstNum = button.textContent;
    } else {
      currentOperation.secondNum = button.textContent;
    }
  } else if (button.classList.contains("equals")) {
    equalsButtonHandler();
  }

  renderScreen();
}

function renderScreen() {
  if (currentOperation.equalsButton) {
    mainLine.textContent = currentOperation.answer;
    return;
  }

  mainLine.textContent = `${currentOperation.firstNum} ${currentOperation.operator} ${currentOperation.secondNum}`
}

function equalsButtonHandler() {
  currentOperation.equalsButton = true;
  switch (currentOperation.operator) {
    case "+":
      currentOperation.answer = +currentOperation.firstNum + +currentOperation.secondNum;
      break;
    default:
      alert("Something went wrong with clicking the equals button");
  }

}



// Math operators
function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}