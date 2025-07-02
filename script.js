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
    return numTwo == 0 ? "Cannot divide by zero!" : numOne / numTwo;
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

calculatorButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {

        const value = e.target.textContent;

        if (value == 'C') {
            if (!isNumTwo) {
                numOne = numOne.slice(0, -1);
            } else {
                numTwo = numTwo.slice(0, -1);
            }
        }
        else if (value == '=') {
            if (numTwo === "") {
                alert("Input the second number!");
            } else {
                result = operate(numOne, numTwo, operator);
                numOne = "";
                numTwo = "";
                operator = "";
                isNumTwo = false;
                alert(result);
            }
        }
        else if (operators.includes(value)) {
            if (numOne === "") {
                alert("Input a number first!");
            } else {
                isNumTwo = true;
                operator = value;
            }
        }
        else if (!isNumTwo) {
            numOne += value;
        } 
        else if (isNumTwo) {
            numTwo += value;    
        }
    }
});