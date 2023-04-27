'use strict';
const root = document.getElementById('root');

// 関数 getDate を宣言する
const getDate = function () {
  return new Date();
};

// 関数 call を宣言する
const call = function (func) {
  root.innerHTML += func() + '<br>';
};

// call関数を呼び出す
call(getDate);
