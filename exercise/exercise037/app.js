'use strict';
const operand1 = document.getElementById('operand1');
const operand2 = document.getElementById('operand2');
const operator = document.getElementById('operator');

const calculate = () => {
  const op1 = parseInt(operand1.value);
  const op2 = parseInt(operand2.value);

  switch (operator.value) {
    case 'plus':
      return op1 + op2;
    case 'minus':
      return op1 - op2;
    case 'multiply':
      return op1 * op2;
    case 'divide':
      return op1 / op2;
    default:
      break;
  }
}

// ボタンをクリックしたら、計算結果を表示する
document.getElementById('calculate').addEventListener('click', () => {
  // 計算結果を表示する要素を取得する
  const answer = document.getElementById('answer');
  // 計算結果を表示する
  answer.textContent = calculate();
  operand1.value = '';
  operand2.value = '';
});
