const display = document.getElementById("display");
let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    result = "";
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        display.value = "Error: Cannot divide by 0";
        return undefined;
    } else {
        return a / b;
    }
}

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function calculate() {
    secondNumber = display.value;
    result = operate(operator, firstNumber, secondNumber);

    if (result !== undefined) {
        display.value = result;
        firstNumber = result;
        operator = "";
        secondNumber = "";
    }
}

// Add event listeners for operator buttons
document.querySelectorAll('.operator-btn').forEach(item => {
    item.addEventListener('click', () => {
        if (firstNumber === "") {
            // If the first number is not set, set it
            firstNumber = display.value;
            operator = item.textContent;
            display.value = "";
        } else {
            // If the first number is set, calculate and set the result as the first number
            calculate();
            operator = item.textContent;
        }
    });
});