'use strict';
const root = document.getElementById('root');

// 現在時刻を表示する関数
const show = () => {
  root.innerHTML += new Date() + '<br>';
};

// 5秒(5000ミリ秒)ごとにshow関数を呼び出す
window.setInterval(show, 5000);
