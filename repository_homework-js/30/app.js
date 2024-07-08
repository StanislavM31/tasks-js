/* 
30. Напишите функцию, которая принимает массив чисел и возвращает минимальное
значение.
*/

function findMin(arr) {


  let minValue = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    const number = arr[i];

    if (number < minValue) {
      minValue = number;
    }
  }

  return minValue;
}

const numbers = [10, 5, 8, 3, 12, -2, 100];
const result = findMin(numbers);
console.log(result);
