const currentOperation = {
  firstNum: "",
  operator: "",
  secondNum: "",
  calculate: false,
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
    operatorButtonHandler(button);
  } else if (button.classList.contains("number")) {
    numberButtonHandler(button);
  } else if (button.classList.contains("equals")) {
    calculate();
  }

  renderScreen();
}

function renderScreen() {
  if (currentOperation.calculate) {
    mainLine.textContent = currentOperation.answer;
    return;
  }

  mainLine.textContent = `${currentOperation.firstNum} ${currentOperation.operator} ${currentOperation.secondNum}`
}

function calculate() {
  currentOperation.calculate = true;
  switch (currentOperation.operator) {
    case "+":
      currentOperation.answer = add(+currentOperation.firstNum, +currentOperation.secondNum);
      break;
    case "÷":
      currentOperation.answer = divide(+currentOperation.firstNum, +currentOperation.secondNum);
      break;
    case "−":
      currentOperation.answer = subtract(+currentOperation.firstNum, +currentOperation.secondNum);
      break;
    case "×":
      currentOperation.answer = multiply(+currentOperation.firstNum, +currentOperation.secondNum);
      break;

    default:
      alert("Something went wrong with clicking the 'equals' button");
  }
}

function numberButtonHandler(button) {
  const value = button.textContent;

  if (currentOperation.operator === "") {
    currentOperation.firstNum += value;
  } else {
    currentOperation.secondNum += value;
  }
}

function operatorButtonHandler(button) {
  currentOperation.operator = button.textContent;
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