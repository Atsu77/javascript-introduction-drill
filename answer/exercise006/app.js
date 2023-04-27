'use strict';
const root = document.getElementById('root');

// 定数 age を宣言し、20 を代入する
const age = 20;
// age が 20 と等しい場合のみ「20歳です。」と書き込む
if (age === 20) {
  root.innerHTML += '20歳です。';
}
