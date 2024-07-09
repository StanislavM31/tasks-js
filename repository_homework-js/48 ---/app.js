/* 
48. Напишите функцию, которая принимает массив чисел и возвращает новый массив,
содержащий все простые числа.
*/


function foo(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  
  if (num % 2 === 0 || num % 3 === 0) return false;

  // ....
  
  return true;
}



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = foo(array);
console.log(result);