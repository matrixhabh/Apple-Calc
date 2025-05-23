const button = document.querySelectorAll("button");

let storedCalculation = [];
let total = "";

const screenDisplay = document.querySelector("#display");

function appendToDisplay(value) {
  if (
    screenDisplay.textContent === "0" ||
    screenDisplay.textContent === "Error"
  ) {
    screenDisplay.textContent = value;
    storedCalculation = [value];
  } else {
    screenDisplay.textContent += value;
    storedCalculation.push(value)
  }
  total = storedCalculation.join("")
}

function clearScreen() {
  storedCalculation = [];
  total = "";
  screenDisplay.textContent = 0;
}

function evaluateExpression(){
  try {
    const expression = total
      .replace(/÷/g, "/")
      .replace(/×/g, "*")
      .replace(/-/g, "-");
    const result = eval(expression);

    screenDisplay.textContent = result;
    storedCalculation = [result];
    console.log(storedCalculation);
    total = result.toString();
  } catch {
        screenDisplay.textContent = "Error"
        storedCalculation = [result]
        total = ""
  }
}

function convertToPercent(){
    const currentNumber = parseFloat(storedCalculation) || 0;
    const percent = currentNumber / 100;
    screenDisplay.textContent = percent;
    storedCalculation = [percent];
    total = percent.toString()
}

function toggleSign(){
    if(screenDisplay.textContent.startsWith("-")){
        screenDisplay.textContent = screenDisplay.textContent.slice(1)
    } else {
        screenDisplay.textContent = "-" + screenDisplay.textContent
    }

    storedCalculation = [screenDisplay.textContent];
    total = screenDisplay.textContent
}


function calculate(button) {
  const value = button.textContent;
  console.log("clicked:", value);

  switch (value) {
    case "AC":
      clearScreen();
      break;
    case "=":
      evaluateExpression();
      break;
    case "%":
      convertToPercent();
      break;
    case "+/-":
      toggleSign();
      break;
    default:
      appendToDisplay(value);
      break;
  }
}

function initCalculator() {
  button.forEach((button) =>
    button.addEventListener("click", () => calculate(button))
  );
}

initCalculator();
