'use strict';
const root = document.getElementById('root');

// テキストボックス付きのダイアログボックスを表示する
const input = prompt('入力された文字が数値に変換できるか判定します。');
// ユーザーが入力した文字列を、数値型に変換する
const converted = Number(input);
// 結果によってメッセージをページに書き込む
if (input == null || input === '') {
  root.innerHTML += '文字を入力してOKをクリックしてください。';
} else if (Number.isNaN(converted)) {
  root.innerHTML += `${input}は数値に変換できません。`;
} else {
  root.innerHTML += `${input}は数値に変換できます。`;
}
