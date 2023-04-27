'use strict';
const root = document.getElementById('root');

// 定数 lastName を宣言し、自分の名字を代入する。
const lastName = '鈴木';
// 定数 firstName を宣言し、自分の名前を代入する。
const firstName = '太郎';
// 定数 fullName を宣言し、lastName と firstName を結合した結果を代入する。
const fullName = lastName + firstName;
// ページに、fullName の中身を書き込む。
root.innerHTML += fullName;
