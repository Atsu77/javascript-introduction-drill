'use strict';
const root = document.getElementById('root');

// 定数 price を宣言し、100 を代入する。
const price = 100;

// 定数 amount を宣言し、51 を代入する。
const amount = 51;

// 定数 totalPrice を宣言し、price と amount の乗算の結果を代入する。
const totalPrice  = price * amount;

// ページに、totalPrice の中身を書き込む。
root.innerHTML = totalPrice;

