'use strict';
const root = document.getElementById('root');

// 関数 calcConsumptionTax を宣言する
const calcConsumptionTax = (price, tax=0.1) => {
  return price * (1 + tax);
}

// calcConsumptionTaxを呼び出す(単価500)
const res = calcConsumptionTax(500);
root.innerHTML += `${res}<br>`;

// calcConsumptionTaxを呼び出す(単価1000,税率0.08)
const res2 = calcConsumptionTax(1000, 0.08);
root.innerHTML += `${res2}<br>`;
