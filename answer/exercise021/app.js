'use strict';

// 定数 book を宣言し、以下のプロパティを持つオブジェクトを代入する
// title プロパティ(文字列・値は適当な書籍タイトル)
// author プロパティ(文字列・値は適当な人名)
const book = {
  title: 'JavaScript入門',
  author: '佐藤 太郎',
};
// 定数 item を宣言し、以下のプロパティを持つオブジェクトを代入する
// id プロパティ(数値・値は 10)
// price プロパティ(数値・値は適当な金額)
const item = {
  id: 10,
  price: 3000,
};
// 定数 product を宣言し、book と item のプロパティをすべて持つオブジェクトを代入する
// オブジェクトの生成にはスプレッド構文を利用する
const product = {
  ...book,
  ...item,
};
// product の中身をコンソールに出力する
console.log(product);
