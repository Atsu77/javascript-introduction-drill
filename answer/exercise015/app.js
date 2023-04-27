'use strict';

// 以下のプロパティを持つオブジェクトを生成し、定数 person に代入する
// id プロパティ(数値・値は 10)
// name プロパティ(文字列・値は自分の名前)
// birthday プロパティ(文字列・値は自分の誕生日)
// company プロパティ(オブジェクト)
// company オブジェクトの id プロパティ(数値・値は 50)
// company オブジェクトの name プロパティ(文字列・値は任意の会社名)
const person = {
  id: 10,
  name: '佐藤 太郎',
  birthday: '1999-07-01',
  company: {
    id: 50,
    name: 'カサレアル',
  },
};
// コンソールに person の中身を出力する
console.log(person);
// 定数 company を宣言し、person オブジェクトの company プロパティを代入する
const company = person.company;
// コンソールに company の中身を出力する
console.log(company);
