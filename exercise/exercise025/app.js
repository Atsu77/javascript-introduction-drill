'use strict';
const root = document.getElementById('root');

// 関数 getDate を宣言する
const getData = () => new Date();

// 関数 call を宣言する
const call = (func) => {
  const res = func();
  root.insertAdjacentHTML('beforeend', `<p>${res}</p>`);
}


// call関数を呼び出す
call(getData);
call(getData);

