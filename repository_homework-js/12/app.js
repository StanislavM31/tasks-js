/* 
12. Напишите функцию, которая принимает массив чисел и возвращает произведение всех 
элементов.

*/
const array = [1, 2, 3, 4, 5];

function foo(arr) {
  return arr.reduce((a, b) => a * b, 1);
}

const res = foo(array);

console.log(res);
