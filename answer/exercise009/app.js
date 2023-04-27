'use strict';
const root = document.getElementById('root');

// 以下の要素を持つ配列を宣言し、定数 array に代入する
// 10, 20, 30, 40, 50
const array = [10, 20, 30, 40, 50];
// ページに、array の中身を書き込む
root.innerHTML += array + '<br>';
// 定数 num を宣言し、array の要素数を代入する
const num = array.length;
// ページに、num の中身を書き込む
root.innerHTML += num;
