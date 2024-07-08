/* 42. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где все
элементы отсортированы по возрастанию.
*/

function foo(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  

  const numbers = [5, 17, 8, 1, 9, 3];
  const result = foo(numbers);
  console.log(numbers, "sorted to => " ,result);