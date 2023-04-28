'use strict';
const root = document.getElementById('root');
// 定数 age を宣言し、20 を代入する
const age = 20;

// age が 20 以上の場合は、ページに「成年です。」と書き込む
if(age >= 20) {
  root.innerHTML = "成年です。";
  // age が 20 未満、かつ 0 以上の場合は、ページに「未成年です。」と書き込む
} else if (age < 20 && age >= 0) {
  root.innerHTML = "未成年です。";
}
// age に様々な値を代入し、結果を確認する。

