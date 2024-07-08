/* 
32. Напишите функцию, которая принимает массив чисел и возвращает индекс первого 
отрицательного числа.

*/

function foo(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        return i;
      }
    }
  
    return "нет отриц. чисел";
  }
  

  const numbers_of_array = [10, -5, -3, 8, 6, 1];
  const result = foo(numbers_of_array);
  console.log("индекс:", result); 