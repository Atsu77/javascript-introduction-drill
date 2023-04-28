'use strict';
const root = document.getElementById('root');

const isNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

// テキストボックス付きのダイアログボックスを表示する
const input = prompt("入力された文字が数値に変換できるか判定します。")

if(input === null || input === "") {
  root.innerHTML = "文字を入力してOKをクリックしてください";
} else if(isNumber(input)) {
  root.innerHTML = `${input}は数値に変換できます`;
} else {
  root.innerHTML = `${input}は数値に変換できません`;
}