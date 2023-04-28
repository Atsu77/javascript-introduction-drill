'use strict';
const root = document.getElementById('root');

const cryptogram = 'たれいたぞうたこにたぷりんたがあたる';
root.innerHTML += `元の文: ${cryptogram}<br>`;

// 引数の文字列から「た」の文字を取り除いた文字列を返す関数を宣言する
const removeTa = (str) => {
  return str.replace(/た/g, '');
};

// 上記の関数に、定数 cryptogram を渡した結果をページに書き込む
root.innerHTML += `「た」を取り除いた文: ${removeTa(cryptogram)}`;

