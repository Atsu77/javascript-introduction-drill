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
// 定数 id, name, birthday を宣言し、person オブジェクトの同名プロパティを代入する
const { id, name, birthday } = person;
// 3つの定数の中身をそれぞれページに書き込む
root.innerHTML += id + '<br>';
root.innerHTML += name + '<br>';
root.innerHTML += birthday;
