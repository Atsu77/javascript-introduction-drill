export default class Formula {
  constructor(operand1, operand2, operator) {
    this.operand1 = operand1;
    this.operand2 = operand2;
    this.operator = operator;
  }

  // 答えを計算する
  calculate() {
    if (this.operator === 'plus') {
      return this.operand1 + this.operand2;
    }
    if (this.operator === 'minus') {
      return this.operand1 - this.operand2;
    }
    if (this.operator === 'multiply') {
      return this.operand1 * this.operand2;
    }
    return this.operand1 / this.operand2;
  }

  // 演算の種類にあった記号を得る
  getOperatorMark() {
    if (this.operator === 'plus') {
      return ' + ';
    }
    if (this.operator === 'minus') {
      return ' - ';
    }
    if (this.operator === 'multiply') {
      return ' × ';
    }
    return ' ÷ ';
  }

  // 式の形をした文字列を得る
  getFormulaString() {
    const answer = this.calculate();
    const operatorMark = this.getOperatorMark();
    return this.operand1 + operatorMark + this.operand2 + ' = ' + answer;
  }
}
