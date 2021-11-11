const numButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const delButton = document.querySelector('[data-delete]')
const acButton = document.querySelector('[data-all-clear]')
const prevOpTextEl = document.querySelector('[data-previous-operand]')
const currOpTextEl = document.querySelector('[data-current-operand]')

class Calculator {
    constructor(prevOpTextEl, currOpTextEl) {
        this.prevOpTextEl = prevOpTextEl
        this.currOpTextEl = currOpTextEl
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const curr = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(curr)) return
        switch(this.operation) {
            case '+':
                computation = prev + curr
                break
            case '-':
                computation = prev - curr
                break
            case '*':
                computation = prev * curr
                break
            case '÷':
                computer = prev / curr
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    updateDisplay() {
        this.currOpTextEl.innerText = this.currentOperand
        if (this.operation != null) {
            this.prevOpTextEl.innerText = `${this.previousOperand} ${this.operation}`
        } else {
            this.prevOpTextEl.innerText = ''
        }
    }
}


const calculator = new Calculator(prevOpTextEl,currOpTextEl)

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

acButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

delButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

// function add(a,b) {
//     return a + b;
// }

// function subtract(a,b) {
//     return a - b;
// }

// function multiply(a,b) {
//     return a * b;
// }

// function divide(a,b) {
//     return a / b;
// }
