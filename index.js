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


};

 updateDisplay() {
    this.curOutput.innerText = this.curOperand;
    this.prevOutput.innerText = this.prevOperand;
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