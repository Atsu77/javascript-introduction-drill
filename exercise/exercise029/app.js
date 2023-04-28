'use strict';
//const root = document.getElementById('root');
const showBookTitle = (name, auther) => {
  return `タイトル：${name}, 著者：${auther}`;
}

const product = {
  id: 1,
  name: "JavaScript 入門",
  author: "佐藤 太郎",
  price: 2800,
}

const bookTitle = showBookTitle(product.name, product.author);
console.log(bookTitle);