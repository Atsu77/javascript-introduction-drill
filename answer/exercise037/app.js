'use strict';

// 各種DOMを取得する
const operand1DOM = document.getElementById('operand1');
const operand2DOM = document.getElementById('operand2');
const operatorDOM = document.getElementById('operator');
const calcButtonDOM = document.getElementById('calculate');
const answerDOM = document.getElementById('answer');

// 計算ボタンがクリックされた時の処理
calcButtonDOM.addEventListener('click', () => {
  // 答えを計算する
  const answer = calculate();
  // 答えを表示する
  answerDOM.innerHTML = answer;
});

const calculate = () => {
  // DOMから値を取得する
  const operand1 = Number(operand1DOM.value);
  const operand2 = Number(operand2DOM.value);
  const operator = operatorDOM.value;

  // 答えを計算する
  if (operator === 'plus') {
    return operand1 + operand2;
  }
  if (operator === 'minus') {
    return operand1 - operand2;
  }
  if (operator === 'multiply') {
    return operand1 * operand2;
  }
  return operand1 / operand2;
};
