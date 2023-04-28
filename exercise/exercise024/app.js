'use strict';
const root = document.getElementById('root');

// add関数
const add = function() { return a + b };

// add関数を呼び出す
console.log(add());

// getName関数
const getName = function() { return "山根惇秀" }

// getName関数を呼び出す
console.log(getName());

// add100関数
const add100 = function(num) { return num + 100 }

// add100関数を呼び出す
console.log(add100(100));

// print関数
const print = function(str1, str2) { return str1 + str2 }

// print関数を呼び出す
console.log(print("山根", "惇秀"));

