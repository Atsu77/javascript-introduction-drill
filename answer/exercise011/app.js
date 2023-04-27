'use strict';
const root = document.getElementById('root');

// 以下の要素を持つ配列を宣言し、定数 array に代入する
// English, Chinese, Spanish, Japanese, German
const array = ['English', 'Chinese', 'Spanish', 'Japanese', 'German'];
// array の3番目の要素を 日本語 に置き換える
array[3] = '日本語';
// array に要素を追加する(追加する要素は French)
array.push('French');
// ページに、array の中身を書き込む
root.innerHTML += array;
