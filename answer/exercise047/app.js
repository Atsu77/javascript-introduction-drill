'use strict';
const root = document.getElementById('root');

// Employeeクラスを宣言する
class Employee {
  constructor(id, name, department) {
    this.id = id;
    this.name = name;
    this.department = department;
  }
}

// インスタンスを生成して定数に代入する
const employee = new Employee(10, '佐藤 太郎', '開発部');

// 文字列を書き込む
const id = employee.id;
const name = employee.name;
const department = employee.department;
root.innerHTML += 'id:' + id + ' ' + name + '(' + department + ')';
