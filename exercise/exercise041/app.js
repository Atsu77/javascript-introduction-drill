import data from './data.js';
import { generateCartItem, getTotal } from './cartItemFunctions.js';

const items = [];
for (const array of data) {
  const cartItem = generateCartItem(array[0], array[1], array[2]);
  items.push(cartItem);
}

// TODO
