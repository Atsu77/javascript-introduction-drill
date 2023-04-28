//import Formula from "./formula";

export class Formula {
  constructor(op1, op2, operator) {
    this.op1 = op1;
    this.op2 = op2;
    this.operator = operator;
  }

  describe() {
    return `${this.op1} + ${this.op2} = ${this.calculate()}`;
  }

  calculate() {
    switch (this.operator) {
      case "plus":
        return this.op1 + this.op2;
      case "minus":
        return this.op1 - this.op2;
      case "multiply":
        return this.op1 * this.op2;
      case "divide":
        return this.op1 / this.op2;
      default:
        break;
    }
  }
}


const operand1 = document.getElementById('operand1');
const operand2 = document.getElementById('operand2');
const operator = document.getElementById('operator');
const answerList = document.getElementById('answerList');
const calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', (e) => {
  e.preventDefault();
  const res = calculateFormula();
  addAnswerList(res);
  resetInputFields();
})


const calculateFormula = () => {
  const firstOperand = parseInt(operand1.value);
  const secondOperand = parseInt(operand2.value);
  const operatorType = operator.value;
  const formulaResult = new Formula(firstOperand, secondOperand, operatorType);
  console.log(formulaResult.calculate());
  return formulaResult.describe();
}

const addAnswerList = (res) => {
  const li = document.createElement('li');
  li.textContent = res;
  answerList.appendChild(li);
}

const resetInputFields = () => {
  operand1.value = '';
  operand2.value = '';
}