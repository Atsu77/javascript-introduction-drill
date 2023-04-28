'use strict';
const root = document.getElementById('root');

class Employee {
  constructor(id, name, department) {
    this.id = id;
    this.name = name;
    this.department = department;
  }
}

const employees = [
  new Employee(1, '山田太郎', '営業部'),
  new Employee(2, '佐藤花子', '総務部'),
  new Employee(3, '鈴木次郎', '営業部'),
  new Employee(4, '田中三郎', '総務部')
];

employees.forEach((employee) => {
  root.innerHTML += `${employee.id} : ${employee.name} : ${employee.department}<br>`;
});
