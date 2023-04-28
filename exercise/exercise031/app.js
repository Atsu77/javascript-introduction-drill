"use strict";
//const root = document.getElementById("root");

// 現在時刻を表示する関数
const show = () => new Date();

// 5秒(5000ミリ秒)ごとにshow関数を呼び出す
setInterval(() => {
  console.log(show());
}, 5000);
