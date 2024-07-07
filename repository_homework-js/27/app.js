/* 
7. Напишите функцию, которая принимает массив строк и возвращает массив только тех 
строк, которые содержат больше пяти символов.

*/

function findNegative(arr) {
  const negativeNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];

    if (number < 0) {
      negativeNumbers.push(number);
    }
  }

  return negativeNumbers;
}

const numbers = [1, -2, 3, -4, 5, -7, 12, -3];
const result = findNegative(numbers);
console.log(result);
