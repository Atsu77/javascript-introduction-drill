'use strict';
const root = document.getElementById('root');

// テキストボックス付きのダイアログボックスを表示する
const input = prompt("名前を入力してください");

// 結果によって、メッセージをページに書き込む
if(input === null) {
  root.innerHTML = "キャンセルされました";
} else if(input === "") {
  root.innerHTML = "名前を入力してください";
} else {
  root.innerHTML = `${input}さんこんにちは`;
}

