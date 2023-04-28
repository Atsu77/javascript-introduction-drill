// app.jsに、配列や関数をインポートする

import { generateCartItem, getTotal } from "./cartItemFunctions";
import stationary from "./data";

const root = document.getElementById("root");

// 空の配列 items を宣言する
let items = [];

// data.jsからインポートした配列の各要素に対して繰り返し処理する
stationary.forEach((stationary) => {
  items.push(generateCartItem(...stationary));
});


// 配列 items を繰り返し処理する
items.forEach((item) => {
  root.innerHTML += `<p>${item.getDetail()}</p>`;
});
  // getTotal メソッドを利用して、配列 items の合計金額を求めてページに書き込む
root.innerHTML += `<p>合計金額：${getTotal(items)}円</p>`;