/* 
16. Напишите функцию, которая принимает число и возвращает сумму его цифр.

*/

function foo(arr) {
  let sum = 0;
  const digits = arr.toString().split("");

  for (let i = 0; i < digits.length; i++) {
    sum += digits[i] * 1;
  }

  return sum;
}

console.log(foo(12345));
console.log(foo(9876)); 
