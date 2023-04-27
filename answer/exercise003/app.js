'use strict';
const root = document.getElementById('root');

// 変数 ageを宣言し、自分の年齢を代入する。
let age = 20;
// ageに1加えた値をageに代入する。
age = age + 1;
// ページに、ageの中身を書き込む。
root.innerHTML += age;
