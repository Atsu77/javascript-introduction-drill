'use strict';
const root = document.getElementById('root');

// ショッピングカートの1商品を表すオブジェクトを代入する
const cartItem = {
  name: 'えんぴつ',
  price: 100,
  amount: 5,
  getSubtotal() {
    return this.price * this.amount;
  },
  getDetail() {
    return `${this.name}@${this.price}円 × ${this.amount}個 = ${this.getSubtotal()}円`;
  },
};
// getSubtotal メソッドを実行し、その戻り値をページに書き込む
root.innerHTML += cartItem.getSubtotal() + '<br>';
// getDetail メソッドを実行し、その戻り値をページに書き込む
root.innerHTML += cartItem.getDetail();
