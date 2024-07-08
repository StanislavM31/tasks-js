/* 
40. Напишите функцию, которая принимает число и возвращает массив всех делителей этого
числа.
*/

function foo(number) {
  const array_of_div = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      array_of_div.push(i);
    }
  }

  return array_of_div;
}

const n = 12;
const result = foo(n);
console.log(`массив всех делителей числа ${n}`, result);
