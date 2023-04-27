'use strict';
const root = document.getElementById('root');

// 以下の要素を持つ配列を宣言し、定数 array1 に代入する
// 1, 3, 5, 7, 9
const array1 = [1, 3, 5, 7, 9];
// 以下の要素を持つ配列を宣言し、定数 array2 に代入する
// 2, 4, 6, 8, 10
const array2 = [2, 4, 6, 8, 10];
// 定数 array3 を宣言し、array1 と array2 の要素全てを持つ配列を代入する
const array3 = [...array1, ...array2];
// ページに array3 の中身を書き込む
root.innerHTML += array3;
