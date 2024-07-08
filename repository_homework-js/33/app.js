/*
33. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где
каждый элемент умножен на его индекс.

*/
function foo(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * i);
    }
  
    return result;
  }
  

  const numbers = [2, 4, 6, 8, 10];
  const result = foo(numbers);
  console.log(`${numbers} => ${result}`);
