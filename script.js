let numOne = "";
let operator = "";
let numTwo = "";
let isNumTwo = false;
const operators = ['+', '-', '*', '/'];

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    if (numTwo == 0) {
        alert("Ouch! :(");
        return "";
    } else {
        return numOne / numTwo;
    }
}

function operate(numOne, numTwo, operator) {
    numOne = Number(numOne);
    numTwo = Number(numTwo);

    switch (operator) {
        case '+': return add(numOne, numTwo);
        case '-': return subtract(numOne, numTwo);
        case '*': return multiply(numOne, numTwo);
        case '/': return divide(numOne, numTwo);
        default: return "Invalid Operator"
    }
}

const calculatorButtons = document.querySelector('#calculator');
const display = document.querySelector('#display');

calculatorButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {

        const value = e.target.textContent;

        if (value == 'C') {
            if (!isNumTwo) {
                numOne = numOne.slice(0, -1);
                display.textContent = numOne;
            } else {
                numTwo = numTwo.slice(0, -1);
                display.textContent = numTwo;
            }
        }
        else if (value == '=') {
            if (numTwo === "") {
                alert("Input a number!");
            } else {
                result = operate(numOne, numTwo, operator);
                numOne = String(result);
                numTwo = "";
                operator = "";
                isNumTwo = false;
                display.textContent = result;
            }
        }
        else if (operators.includes(value)) {
            if (numOne === "") {
                alert("Input a number first!");
            } else {
                isNumTwo = true;
                operator = value;
                display.textContent = operator;
            }
        }
        else if (!isNumTwo) {
            numOne += value;
            display.textContent = numOne;
        } 
        else if (isNumTwo) {
            numTwo += value;    
            display.textContent = numTwo;
        }
    }
});