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

};

 compute() {

};

 updateDisplay() {
    this.curOutput.innerText = this.curOperand;
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