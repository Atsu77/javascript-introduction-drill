'use strict';
const root = document.getElementById('root');

// 関数 calcConsumptionTax を宣言する
const calcConsumptionTax = function (price, tax = 0.1) {
  return price * (1 + tax);
};

// calcConsumptionTaxを呼び出す(単価500)
root.innerHTML += calcConsumptionTax(500) + '<br>';

// calcConsumptionTaxを呼び出す(単価1000,税率0.08)
root.innerHTML += calcConsumptionTax(1000, 0.08);
