/* 
29. Напишите функцию, которая принимает массив чисел и возвращает максимальное
значение.
*/
function foo(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const number = arr[i];

    if (number > max) {
      max = number;
    }
  }

  return max;
}

const numbers = [10, 5, 8, 3, 12];
const result = foo(numbers);
console.log(result);
