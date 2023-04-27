'use strict';
const root = document.getElementById('root');

// 以下のメソッドを持つオブジェクトを生成し、定数 employee に代入する
// getId メソッド : 戻り値は 10(数値)
// getName メソッド : 戻り値は自分の名前(文字列)
// getJoinDate メソッド : 戻り値は適当な日付(文字列)
const employee = {
  // 従来の書き方
  getId: function () {
    return 10;
  },
  // ES2015からの書き方
  getName() {
    return '佐藤 太郎';
  },
  getJoinDate() {
    return '2010-07-01';
  },
};

// 定数 id を宣言し、employee オブジェクトの getId メソッドの戻り値を代入する
const id = employee.getId();
// 定数 name を宣言し、employee オブジェクトの getName メソッドの戻り値を代入する
const name = employee.getName();
// 定数 joinDate を宣言し、employee オブジェクトの getJoinDate メソッドの戻り値を代入する
const joinDate = employee.getJoinDate();
// ページに「実行結果の例」を参考に、定数と文字列を結合した結果を書き込む
root.innerHTML += 'ID : ' + id + ', 名前 : ' + name + ', 入社日 : ' + joinDate;
