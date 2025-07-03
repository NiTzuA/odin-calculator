let numOne = "";
let operator = "";
let numTwo = "";
let isNumTwo = false;
let inChain = false;
let isDecimal = false;
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

function processInput(value) {

        if (value == 'C') {
            if (!isNumTwo) {
                numOne = numOne.slice(0, -1);
                display.textContent = numOne;
            } else {
                numTwo = numTwo.slice(0, -1);
                display.textContent = numTwo;
            }
        }
        else if (value == 'AC') {
            display.textContent = ""
            numOne = "";
            operator = "";
            numTwo = "";
            isNumTwo = false;
            inChain = false;
            isDecimal = false;
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
            } 
            else if (isNumTwo && !inChain) {
                result = operate(numOne, numTwo, operator);
                numOne = String(result);
                numTwo = "";
                operator = value;
                display.textContent = result;
                inChain = true;
            }
            else if (inChain) {
                isNumTwo = true;
                operator = value;
            }
            else
            {
                isNumTwo = true;
                operator = value;
                display.textContent = "";
            }
        }
        else if (!isNumTwo) {
            if (!numOne.includes(".") || value != '.') {
                inChain = false;
                numOne += value;
                display.textContent = numOne;
            }     
        } 
        else if (isNumTwo) {
            if (!numTwo.includes(".") || value != '.') {
                inChain = false
                numTwo += value;    
                display.textContent = numTwo;
            }
        }
}

const calculatorButtons = document.querySelector('#calculator');
const display = document.querySelector('#display');

calculatorButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {

        const value = e.target.textContent;
        processInput(value);
    }
});

document.addEventListener('keydown', (e) => {
    const key = e.key;

    if ((key >= '0' && key <= '9') || key == '.' || operators.includes(key)) {
        processInput(key);
    }
    else if (key == '=' || key == 'Enter') {
        e.preventDefault();
        processInput('=');
    }
    else if (key == 'Backspace') {
        processInput('C');
    }
    else if (key == 'Delete') {
        processInput('AC');
    }

})
