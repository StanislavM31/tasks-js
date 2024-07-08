/* 
37. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где все
отрицательные числа заменены на их абсолютные значения.

*/

function foo(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.push(Math.abs(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

const numbers = [10, -5, -3, 8, 6, 1];
const replacedNumbers = foo(numbers);
console.log(replacedNumbers);
