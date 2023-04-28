'use strict';
const root = document.getElementById('root');

// Itemクラスを宣言する
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  describe() {
    return `${this.name}(${this.price})`;
  }
}

// Itemクラスを継承したFoodクラスを宣言する
class Food extends Item {
  constructor(name, price, expirationDate) {
    super(name, price);
    this.expirationDate = expirationDate;
  }
  describe() {
    return `${this.name}(賞味期限 ${this.expirationDate})(${this.price})`;
  }
}

// Foodクラスのインスタンスを生成する
const food = new Food("カステラ", 500, "2021-10-01");

// describeメソッドを呼び出す
root.innerHTML = food.describe();

