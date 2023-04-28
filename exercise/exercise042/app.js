'use strict';
const root = document.getElementById('root');

// 1から10までの整数を1行ずつページに書き込む

for(let i = 1; i <= 10; i++) {
  root.innerHTML += `${i}<br>`;
}