'use strict';
const root = document.getElementById('root');

// 以下のプロパティを持つオブジェクトを生成し、定数 person に代入する
// id プロパティ(数値・値は 10)
// name プロパティ(文字列・値は自分の名前)
// birthday プロパティ(文字列・値は自分の誕生日)
const person = {
  id: 10,
  name: '佐藤 太郎',
  birthday: '1999-07-01',
};
// person オブジェクトの各プロパティについて、以下の形式で書き込む
// プロパティ名 : プロパティの値
for (const key in person) {
  root.innerHTML += key + ' : ' + person[key] + '<br>';
}
