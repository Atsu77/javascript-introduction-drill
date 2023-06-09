'use strict';
const root = document.getElementById('root');

// 以下のプロパティを持つオブジェクトを生成し、定数 person に代入する
// id プロパティ(数値・値は 10)
// name プロパティ(文字列・値は自分の名前)
// birthday プロパティ(文字列・値は自分の誕生日)
const person = {
  id: 10,
  name: "山根惇秀",
  birthday: "11/05"
}


// person オブジェクトの各プロパティについて、以下の形式で書き込む
// プロパティ名 : プロパティの値
root.innerHTML += `id : ${person.id}<br>name : ${person.name}<br>birthday : ${person.birthday}`;

