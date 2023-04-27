'use strict';
const root = document.getElementById('root');

// add関数
function add() {
  return 1 + 2;
}

// getName関数
function getName() {
  return '佐藤 太郎';
}

// add100関数
function add100(a) {
  return a + 100;
}

// print関数
function print(a, b) {
  root.innerHTML += a + b;
}
