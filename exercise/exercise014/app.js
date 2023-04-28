'use strict';
//const root = document.getElementById('root');

// 以下のプロパティを持つオブジェクトを生成し、定数 person に代入する
const person = {
  id: 10,
  name: "山根惇秀",
  birthday: "11/05",
};
// id プロパティ(数値・値は 10)
// name プロパティ(文字列・値は自分の名前)
// birthday プロパティ(文字列・値は自分の誕生日)

// 定数 id を宣言し、person の id プロパティの値を代入する
const id = person.id;

// コンソールに id の中身を出力する
console.log(id);

// person の id プロパティに 100 を代入する
person.id = 100;

// コンソールに person の中身を出力する
console.log(person);
