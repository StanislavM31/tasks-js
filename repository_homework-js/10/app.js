/* 
10. Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
содержащий только четные числа
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function foo(arr) {
    return arr.filter(function(number) {
      return number % 2 === 0;
    });
  }
  
  const result = foo(numbers);
  console.log("только чётные числа из массива",result);
