'use strict';
const root = document.getElementById('root');

const divide17 = num => {
  const quotient = Math.floor(num / 17);
  const reminder = num % 17;
  return [quotient, reminder];
};

const [result1, result2] = divide17(35);
root.innerHTML += `商は${result1}、余りは${result2}です`;
