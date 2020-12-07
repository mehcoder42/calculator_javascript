function addition(x, y) {
    return x + y;
}

function substraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}


let firstNum = '';
let secondNum = '';
let operator = '';

function pushNum() {
    if (operator === '') {
        firstNum = document.getElementById('currentValue').value += Number(this.innerHTML);
        firstNum = Number(firstNum);
    } else {
        secondNum = document.getElementById('currentValue').value += Number(this.innerHTML);
        secondNum = Number(secondNum);
    }
}

function pushOperator() {
    if (firstNum === '') {
        alert('ERROR, You must put a number first')
    } else {
        if (this.innerHTML === '+') {
            operator = '+';
        } else if (this.innerHTML === '-') {
            operator = '-';
        } else if (this.innerHTML === '*') {
            operator = '*';
        } else if (this.innerHTML === '/') {
            operator = '/';
        }
        ipsum = document.getElementById('storedValue').value = firstNum + operator;
        document.getElementById('currentValue').value = "";
    }
}


let result = '';
function operate() {
    switch (operator) {
        case '+':
            result = addition(firstNum, secondNum);
            break;
        case '-':
            result = substraction(firstNum, secondNum);
            break;
        case '/':
            result = division(firstNum, secondNum);
            break;
        case '*':
            result = multiplication(firstNum, secondNum);
            break;
        default:
            alert('ERROR');
    }
    ipsum += secondNum;
    ipsum = document.getElementById('storedValue').value = ipsum;
    document.getElementById('currentValue').value = result;
}


function toClear() {
    firstNum = '';
    secondNum = '';
    operator = '';
    document.getElementById('currentValue').value = "";
    document.getElementById('storedValue').value = "";
}

const num1 = document.getElementById('num1');
num1.addEventListener('click', pushNum);

const num2 = document.getElementById('num2');
num2.addEventListener('click', pushNum);

const num3 = document.getElementById('num3');
num3.addEventListener('click', pushNum);

const num4 = document.getElementById('num4');
num4.addEventListener('click', pushNum);

const num5 = document.getElementById('num5');
num5.addEventListener('click', pushNum);

const num6 = document.getElementById('num6');
num6.addEventListener('click', pushNum);

const num7 = document.getElementById('num7');
num7.addEventListener('click', pushNum);

const num8 = document.getElementById('num8');
num8.addEventListener('click', pushNum);

const num9 = document.getElementById('num9');
num9.addEventListener('click', pushNum);

const num0 = document.getElementById('num0');
num0.addEventListener('click', pushNum);

const equal = document.getElementById('equal');
equal.addEventListener('click', operate);

const plus = document.getElementById('plus');
plus.addEventListener('click', pushOperator);

const minus = document.getElementById('minus');
minus.addEventListener('click', pushOperator);

const multiply = document.getElementById('multiply');
multiply.addEventListener('click', pushOperator);

const divide = document.getElementById('divide');
divide.addEventListener('click', pushOperator);

const clear = document.getElementById('clear');
clear.addEventListener('click', toClear);
