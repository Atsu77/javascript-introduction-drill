'use strict';
const root = document.getElementById('root');

// Itemクラスを宣言する
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  describe() {
    root.innerHTML += this.name + '(' + this.price + '円)';
  }
}

// Itemクラスを継承したFoodクラスを宣言する
class Food extends Item {
  constructor(name, price, expirationDate) {
    super(name, price);
    this.expirationDate = expirationDate;
  }

  describe() {
    root.innerHTML += this.name + '(賞味期限 ' + this.expirationDate + ')(' + this.price + '円)';
  }
}

// Foodクラスのインスタンスを生成する
const food = new Food('カステラ', 500, '2021-10-01');

// describeメソッドを呼び出す
food.describe();
