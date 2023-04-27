'use strict';
const root = document.getElementById('root');

// 現在時刻を表示する関数
const show = () => {
  root.innerHTML += new Date();
};

// 5秒(5000ミリ秒)後にshow関数を呼び出す
window.setTimeout(show, 5000);
