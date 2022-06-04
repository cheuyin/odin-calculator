const currentOperation = {
  firstNum: "0",
  operator: "",
  secondNum: "",
  calculate: false,
  answer: ""
}

const screenMainline = document.querySelector(".mainline");
const screenSubline = document.querySelector(".subline");


// You press a button, something shows up on the calculator screen
const buttons = document.querySelectorAll(".buttons .row div");
buttons.forEach(button => button.addEventListener("click", event => buttonClickHandler(event.target)));

window.onload = renderScreen;

function buttonClickHandler(button) {  
  if (button.classList.contains("operator")) {
    operatorButtonHandler(button);
  } else if (button.classList.contains("number")) {
    numberButtonHandler(button);
  } else if (button.classList.contains("equals")) {
    calculate();
  } else if (button.classList.contains("clear")) {
    clearButtonHandler();
  } else if (button.classList.contains("delete")) { 
    deleteButtonHandler();
  }

  renderScreen();
}

function renderScreen() {
  // If ready to calculate
  if (currentOperation.calculate) {
    screenSubline.textContent = `${currentOperation.firstNum} ${currentOperation.operator} ${currentOperation.secondNum} =`;
    screenMainline.textContent = currentOperation.answer;
    return;
  }

  // Rendering the subline
  if (currentOperation.operator !== "" && currentOperation.firstNum !== "") {
    screenSubline.textContent = `${currentOperation.firstNum} ${currentOperation.operator}`
  } else {
    screenSubline.textContent = "";
  }

  // Rendering the mainline
  if (currentOperation.operator === "" && currentOperation.secondNum === "") {
    screenMainline.textContent = currentOperation.firstNum;
  } else if (currentOperation.operator !== "" || currentOperation.firstNum !== "" || currentOperation.secondNum === "") {
    screenMainline.textContent = currentOperation.secondNum;
  } else {
    screenMainline.textContent = "";
  }
}

// Only call this function when you have two numbers and an operator
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
  // If the = sign is showing, disable number manipulation
  if (currentOperation.calculate === true) return;

  const value = button.textContent;

  if (currentOperation.operator === "") {
    if (currentOperation.firstNum === "0") {
      currentOperation.firstNum = value;
    } else {
      currentOperation.firstNum += value;
    }
  } else {
    currentOperation.secondNum += value;
  }
}

function operatorButtonHandler(button) {
  // If an operator has already been pressed and there are 2 numbers entered
  if (currentOperation.operator !== "" && currentOperation.secondNum !== "") {
    calculate();
    currentOperation.firstNum = currentOperation.answer;
    currentOperation.calculate = false;
    currentOperation.secondNum = "";
  }

  currentOperation.operator = button.textContent;
}

function clearButtonHandler() {
  // Reset operation data
  currentOperation.firstNum = "0";
  currentOperation.operator = "";
  currentOperation.secondNum = "";
  currentOperation.calculate = false;
  currentOperation.answer = "";
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