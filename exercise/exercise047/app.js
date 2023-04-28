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
const employee = new Employee(10, '佐藤太郎', '開発部');

// 文字列を書き込む
root.innerHTML = `id: ${employee.id} ${employee.name}(${employee.department})`;
