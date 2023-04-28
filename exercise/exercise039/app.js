'use strict';
const root = document.getElementById('root');

// 関数 generateCartItem を宣言する

const generateCartItem = (name, price, amount) => {
  return {
    name: name,
    price: price,
    amount: amount,
    getSubtotal() {
      return this.price * this.amount;
    },
    getDetail() {
      return `${this.name}@${this.price}円 × ${
        this.amount
      }個 = ${this.getSubtotal()}円`;
    },
  };
}

// 関数 getTotal を宣言する
const getTotal = (cartItemArray) => {
  let total = 0;
  cartItemArray.forEach((cartItem) => {
    total += cartItem.getSubtotal();
  });
  return total;
}

// generateCartItem 関数を3回実行して、その戻り値をそれぞれ定数に代入する
const cartItem1 = generateCartItem('えんぴつ', 100, 2);
const cartItem2 = generateCartItem('消しゴム', 50, 1);
const cartItem3 = generateCartItem('ボールペン', 150, 3);

// それぞれの getDetail メソッドの結果をページに書き込む
root.innerHTML += `${cartItem1.getDetail()}`;
root.innerHTML += `<br>${cartItem2.getDetail()}`;
root.innerHTML += `<br>${cartItem3.getDetail()}`;


// cartItem1、cartItem2、cartItem3 を要素とする配列 items を宣言する
const items = [cartItem1, cartItem2, cartItem3];

// getTotal を実行して、items の合計金額を求めて、ページに書き込む
const total = getTotal(items);
root.innerHTML += `<br>合計: ${total}円`;

