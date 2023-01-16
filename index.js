class Calculator {
    constructor(prevOutput, curOutput) {
        this.prevOutput = prevOutput;
        this.curOutput = curOutput;
        this.clear();
    }

 clear() {
    this.curOperand = '';
    this.prevOperand = '';
    this.operation = undefined;
};

 del() {
    this.curOperand = this.curOperand.toString().slice(0, -1);
};

 addNumber(number) {
    if (number === "." && this.curOperand.includes(".")) return 
    this.curOperand = this.curOperand.toString() + number.toString();
};

 getOperation(operation) {
    if (this.curOperand === "") return;
    if (this.prevOperand !== "") {
        this.compute();
    }
    this.operation = operation;
    this.prevOperand = this.curOperand;
    this.curOperand = '';
};

 compute() {
    let computation; 
    let current = parseFloat(this.curOperand);
    let previous = parseFloat(this.prevOperand);
    if(isNaN(current) || isNaN(previous)) return; 

    switch(this.operation) {
        case "+":
            computation = previous + current;
        break;

        case "-":
            computation = previous - current;
        break;

        case "*":
            computation = previous * current;
        break;

        case "÷":
            computation = previous / current;
        break;

        default:
        return
    };
    this.curOperand = computation;
    this.operation = undefined;
    this.prevOperand = '';
};

 getCommaNumber(number) {
    const realNum = number.toString();
    const aNum = parseFloat(realNum.split(".")[0]);
    const bNum = realNum.split(".")[1];
    let numDisplay;
    if (isNaN(aNum)) {
        numDisplay = "";
    } else {
        numDisplay = aNum.toLocaleString('en', {maximumFractionDigits: 0});
    };
    if (bNum != null) {
        return `${numDisplay}.${bNum}`;
    } else {
        return numDisplay;
    };

 };

 updateDisplay() {
    this.curOutput.innerText = this.getCommaNumber(this.curOperand);
    if (this.operation != null) {
        this.prevOutput.innerText = `${this.getCommaNumber(this.prevOperand)} ${this.operation}`;
    } else {
        this.prevOutput.innerText = "";
    };
};
};

const numbers = document.querySelectorAll('.btnNum');
const operations = document.querySelectorAll('.operationBtn');
const allClear = document.querySelector('.acBtn');
const delBtn = document.querySelector('.delBtn');
const equals = document.querySelector('.equalsBtn');
const prevOutput = document.querySelector('.previous-output');
const curOutput = document.querySelector('.current-output');

const calculator = new Calculator(prevOutput, curOutput);

numbers.forEach(number => {
    number.addEventListener('click', () => {
        calculator.addNumber(number.innerText);
        calculator.updateDisplay();
    });
});

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        calculator.getOperation(operation.innerText);
        calculator.updateDisplay();
    });
});

equals.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

allClear.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

delBtn.addEventListener('click', () => {
    calculator.del();
    calculator.updateDisplay();
});