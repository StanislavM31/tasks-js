/*
45. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где все
элементы, кратные 3, заменены на 'Fizz', а кратные 5 - на 'Buzz'. Элементы, кратные и 3 и 5,
заменяются на 'FizzBuzz'. 
*/
function fizzBuzz(arr) {
    return arr.map(function(num) {
      if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
      } else if (num % 3 === 0) {
        return 'Fizz';
      } else if (num % 5 === 0) {
        return 'Buzz';
      } else {
        return num;
      }
    });
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const result = fizzBuzz(numbers);
  console.log(result);