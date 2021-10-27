const input = document.querySelector('#current')
const history = document.querySelector('#history')
const numBtn = document.querySelectorAll('.number__btn')
const operatorBtn = document.querySelectorAll('.operator__btn')
const clearBtn = document.querySelector('#clear')
const deleteBtn = document.querySelector('#delete')
const equalBtn = document.querySelector('.equal__btn')

numBtn.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent))
})

operatorBtn.forEach((button) => {
    button.addEventListener('click', () => appendOperator(button.textContent))
})

clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', clearAll)
equalBtn.addEventListener('click', evaluate)

function appendNumber(number){
    input.textContent += number;
}

function appendOperator(operator){
    history.textContent = `${input.textContent} ${operator}`;
    input.textContent = '';
}


function evaluate(){
    return operate()
}

function clear(){
    input.textContent = '';
}

function clearAll(){
    history.textContent = '';
    input.textContent = '';
}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            return b === 0? null : divide(a,b)
        default:
            return null
    }
}