let numOne;
let operator;
let numTwo;

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
