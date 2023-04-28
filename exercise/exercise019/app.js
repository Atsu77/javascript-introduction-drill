'use strict';
const root = document.getElementById('root');

// 以下のプロパティを持つオブジェクトを生成し、定数 person に代入する
// id プロパティ(数値・値は 10)
// name プロパティ(文字列・値は自分の名前)
// birthday プロパティ(文字列・値は自分の誕生日)
const person = {
  id: 10,
  name: "山根惇秀",
  birthDate: "11/05",
};

// 定数 id, name, birthday を宣言し、person オブジェクトの同名プロパティを代入する
const id = person.id;
const name = person.name;
const birthday = person.birthDate;

// 3つの定数の中身をそれぞれページに書き込む
root.insertAdjacentHTML('beforeend', `<div>id: ${id}</div>`);
root.insertAdjacentHTML('beforeend', `<div>name: ${name}</div>`);
root.insertAdjacentHTML('beforeend', `<div>birthday: ${birthday}</div>`);



