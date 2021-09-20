// Calculator function
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear;
    }
}

//Clear function
function clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
};

//Append function
function appendNumber(num) {
    if (num === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + num.toString();
};


function chooseNumber(operation) {

};


function compute() {

};


function updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
};


// Store important variables
let firstOperand = '';
let secondOperand = '';

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay;
    })
});




//Basic operator functions
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
    return a / b;
}

// Operate function
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}





console.log(add(2, 2)) // 4
console.log(subtract(5, 3)) // 2
console.log(multiply(2, 5)) // 10
console.log(divide(6, 3)) // 2
