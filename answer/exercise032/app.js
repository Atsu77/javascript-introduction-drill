'use strict';
const root = document.getElementById('root');

// テキストボックス付きのダイアログボックスを表示する
const name = prompt('名前を入力してください。');

// 結果によって、メッセージをページに書き込む
if (name == null) {
  root.innerHTML += 'キャンセルされました。';
} else if (name === '') {
  root.innerHTML += '名前を入力してください。';
} else {
  root.innerHTML += `${name}さんこんにちは！`;
}
