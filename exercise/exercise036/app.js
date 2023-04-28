'use strict';

// employeeList要素を取得
const employeeList = document.getElementById('employeeList');

// employeeListに要素を追加
const li = document.createElement('li');
li.textContent = '佐藤 太郎';
employeeList.appendChild(li);
