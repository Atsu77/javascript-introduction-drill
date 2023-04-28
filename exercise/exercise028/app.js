'use strict';
const root = document.getElementById('root');

const divide17 =(num) => {
  const quotient = Math.floor(num / 17);
  const remainder = num % 17;
  return [quotient, remainder];
}

const [quotient, remainder] = divide17(100);
root.innerHTML += `商は${quotient}、余りは${remainder}です`;