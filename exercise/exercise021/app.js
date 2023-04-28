"use strict";
//const root = document.getElementById("root");

// 定数 book を宣言し、以下のプロパティを持つオブジェクトを代入する
// title プロパティ(文字列・値は適当な書籍タイトル)
// author プロパティ(文字列・値は適当な人名)
const book = {
  title: "銀河鉄道の夜",
  author: "宮沢賢治",
};

// 定数 item を宣言し、以下のプロパティを持つオブジェクトを代入する
// id プロパティ(数値・値は 10)
// price プロパティ(数値・値は適当な金額)
const item = {
  id: 10,
  price: 1000,
};

// 定数 product を宣言し、book と item のプロパティをすべて持つオブジェクトを代入する
// オブジェクトの生成にはスプレッド構文を利用する
const product = {
  ...book,
  ...item,
};

// product の中身をコンソールに出力する
console.log(product);
