'use strict';
const root = document.getElementById('root');

// add関数
const add = () => {
  return 1 + 2;
};
// add関数を呼び出す
// 戻り値があるので定数に代入する
const addResult = add();
root.innerHTML += addResult + '<br>';

// getName関数
const getName = () => {
  return '佐藤 太郎';
};
// getName関数を呼び出す
// 戻り値があるので定数に代入する
const getNameResult = getName();
root.innerHTML += getNameResult + '<br>';

// add100関数
const add100 = a => {
  return a + 100;
};
// add100関数を呼び出す
// 戻り値があるので定数に代入する
const add100Result = add100(20);
root.innerHTML += add100Result + '<br>';

// print関数
const print = (a, b) => {
  root.innerHTML += a + b;
};
// print関数を呼び出す
// 戻り値はないので定数は不要
print('佐藤 太郎', 'です');
