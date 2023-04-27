// Formulaクラスをインポートする
import Formula from './formula.js';

// 各種DOMを取得する
const operand1DOM = document.getElementById('operand1');
const operand2DOM = document.getElementById('operand2');
const operatorDOM = document.getElementById('operator');
const calcButtonDOM = document.getElementById('calculate');
const answerListDOM = document.getElementById('answerList');

// 計算ボタンがクリックされた時の処理
calcButtonDOM.addEventListener('click', () => {
  // Formulaクラスのインスタンスを生成する
  const operand1 = Number(operand1DOM.value);
  const operand2 = Number(operand2DOM.value);
  const operator = operatorDOM.value;
  const formula = new Formula(operand1, operand2, operator);

  // 式の形を表す文字列を取得する
  const formulaString = formula.getFormulaString();
  // li要素を生成して計算履歴のリストに追加する
  const listElement = generateListElement(formulaString);
  answerListDOM.appendChild(listElement);
});

// li要素を生成する関数
const generateListElement = formulaString => {
  const element = document.createElement('li');
  element.textContent = formulaString;
  return element;
};
