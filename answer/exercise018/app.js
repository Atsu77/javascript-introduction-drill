'use strict';
const root = document.getElementById('root');

// 以下の要素を持つ配列を宣言し、定数 array に代入する
// 100, 200
const array = [100, 200];
// 定数 val1, val2 を宣言し、val1 に array の0番目の要素を, val2 に 1番目の要素を代入する
const [val1, val2] = array;
// ページに val1 の中身を書き込む
root.innerHTML += val1 + '<br>';
// ページに val2 の中身を書き込む
root.innerHTML += val2;
