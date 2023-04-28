'use strict';
//const root = document.getElementById('root');

// 以下の要素を持つ配列を宣言し、定数 array に代入する
// 3, 66, 78, 55, 58
const array = [3, 66, 78, 55, 58];

// array が持つ要素全ての平均値を計算し、ページに表示する
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

const avg = sum / array.length;

root.innerHTML = avg;

