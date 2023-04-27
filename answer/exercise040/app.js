// app.jsに、配列や関数をインポートする
import data from './data.js';
import { generateCartItem, getTotal } from './cartItemFunctions.js';

const root = document.getElementById('root');

// 空の配列 items を宣言する
const items = [];
// data.jsからインポートした配列の各要素に対して繰り返し処理する
for (const array of data) {
  const cartItem = generateCartItem(array[0], array[1], array[2]);
  items.push(cartItem);
}

// 配列 items を繰り返し処理する
for (const cartItem of items) {
  root.innerHTML += cartItem.getDetail() + '<br>';
}
// getTotal メソッドを利用して、配列 items の合計金額を求めてページに書き込む
root.innerHTML += `合計: ${getTotal(items)}円`;
