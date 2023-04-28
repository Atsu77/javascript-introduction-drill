"use strict";
//const root = document.getElementById('root');

// Itemクラスを宣言する
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Itemクラスを継承したBookクラスを宣言する
class Book extends Item {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }
}

// Bookクラスのインスタンスを生成する
const book = new Book("JavaScript入門", 3000, "佐藤太郎");

// コンソールに出力する
console.log(book);
