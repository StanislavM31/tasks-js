/*
25. Напишите функцию, которая принимает число и возвращает массив всех чисел от 1 до
этого числа.
*/
function foo(n) {
  const numberOfArray = [];

  for (let i = 1; i <= n; i++) {
    numberOfArray.push(i);
  }

  return numberOfArray;
}

const n = 15;
const result = foo(n);
console.log(result);
