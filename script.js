const button = document.querySelectorAll("button")

function calculate(button){

    const value = button.textContent;
    console.log('clicked:', value);

    switch(value){
        case "AC":
            // clearScreen();
            break;
        case "=":
            // evaluateExpression();
            break;
        case "%":
            // convertToPercent();
            break;
        case "+/-":
            // toggleSign();
            break;
        default:
            // appendToDisplay(value)
            break;
    }
}

buttons.forEach((button) => button.addEventListener("click", () => calculate(button)))