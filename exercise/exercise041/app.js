import data from './data.js';
import { generateCartItem, getTotal } from './cartItemFunctions.js';

const items = [];
for (const array of data) {
  const cartItem = generateCartItem(array[0], array[1], array[2]);
  items.push(cartItem);
}

const cartList = document.getElementById('cart-list');
const cartForm = document.getElementById('cart-form');
const nameInput = document.getElementById('name-input');
const priceInput = document.getElementById('price-input');
const amountInput = document.getElementById('amount-input');
const addButton = cartForm.querySelector('button');

items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item.getDetail();
  cartList.appendChild(li);
})

addButton.addEventListener('click', (e) => {
  addItemToCart(e);
});

const addItemToCart = (e) => {
  e.preventDefault();
  const inputValue = getInputValue();
  const cartItem = generateCartItem(inputValue.name, inputValue.price, inputValue.amount);
  updateItemList(cartItem);
  updateTotal();
  resetInputFields();
}

const getInputValue = () => {
  const name = nameInput.value;
  const price = parseInt(priceInput.value, 10);
  const amount = parseInt(amountInput.value, 10);
  return {name, price, amount};
}


const updateItemList = (cartItem) =>  {
  items.push(cartItem);

  const li = document.createElement('li');
  li.textContent =cartItem.getDetail();
  cartList.appendChild(li);
}

const updateTotal = () => {
  const total = getTotal(items);
  const totalText = document.getElementById('total');
  totalText.textContent = total;
}

const resetInputFields = () => {
  cartForm.value = '';
  nameInput.value = '';
  priceInput.value = '';
  amountInput.value = '';
}
