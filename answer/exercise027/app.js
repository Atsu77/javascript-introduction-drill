'use strict';
const root = document.getElementById('root');

const squared = num => num * num;
root.innerHTML += squared(30) + '<br>';

const multiply = (a, b) => {
  const result = a * b;
  return result;
};
root.innerHTML += multiply(17, 13) + '<br>';

const generateItem = (id, name, price) => ({
  id: id,
  name: name,
  price: price,
});
const item = generateItem(10, 'りんご', 300);
root.innerHTML += JSON.stringify(item);
