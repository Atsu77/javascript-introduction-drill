export class Formula {
  constructor(op1, op2, operator) {
    this.op1 = op1;
    this.op2 = op2;
    this.operator = operator;
  }

  get describe() {
    return `${this.op1} + ${this.op2} = ${this.calculate()}`;
  }

  calculate() {
    switch (this.operator) {
      case "plus":
        return op1 + op2;
      case "minus":
        return op1 - op2;
      case "multiply":
        return op1 * op2;
      case "divide":
        return op1 / op2;
      default:
        break;
    }
  }
}
