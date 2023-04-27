import data from './data.js';
import { generateCartItem, getTotal } from './cartItemFunctions.js';

const items = [];
for (const array of data) {
  const cartItem = generateCartItem(array[0], array[1], array[2]);
  items.push(cartItem);
}

const drawListAndTotal = () => {
  // ページ上の ul 要素を取得する
  const cartList = document.getElementById('cart-list');
  // ul 要素内のHTMLを消去する
  cartList.innerHTML = '';

  // items配列を1要素ずつ、getDetail メソッドの結果、li 要素としてページに書き込む
  for (const cartItem of items) {
    cartList.innerHTML += `<li>${cartItem.getDetail()}</li>`;
  }

  // ページ上の span 要素を取得する
  const totalSpan = document.getElementById('total');
  // getTotal メソッドを利用して、配列 items の合計金額を求めて、span 要素に書き込む
  totalSpan.innerHTML = getTotal(items);
};

// drawListAndTotal 関数を実行する
drawListAndTotal();

// ページ上の form 要素を取得する
const cartForm = document.getElementById('cart-form');
// form 要素の送信時に、以下の処理を実行する
cartForm.addEventListener('submit', event => {
  // ページが自動的に切り替わるのを防止する
  event.preventDefault();

  // 各テキストボックスの要素を取得する
  const nameInput = document.getElementById('name-input');
  const priceInput = document.getElementById('price-input');
  const amountInput = document.getElementById('amount-input');

  // 各テキストボックスの入力値を取得する
  const name = nameInput.value;
  const price = priceInput.value;
  const amount = amountInput.value;

  // generateCartItem 関数を実行してオブジェクトを生成する
  const cartItem = generateCartItem(name, price, amount);
  // 生成したオブジェクトを items 配列に追加する
  items.push(cartItem);

  // drawListAndTotal 関数を実行する（items配列の中身で画面を更新する）
  drawListAndTotal();

  // 各テキストボックスの入力値を消去する
  nameInput.value = '';
  priceInput.value = '';
  amountInput.value = '';
});
