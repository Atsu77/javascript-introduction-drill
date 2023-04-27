'use strict';
const root = document.getElementById('root');

const showBookTitle = ({ name, author }) => {
  root.innerHTML += 'タイトル : ' + name + ', 著者 : ' + author;
};

const product = {
  id: 10,
  name: 'JavaScript入門',
  author: '佐藤 太郎',
  price: 3000,
};

showBookTitle(product);
