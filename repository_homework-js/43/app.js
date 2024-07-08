/*
43. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где все
элементы отсортированы по убыванию.

*/
function foo(arr) {
    return arr.sort((a, b) => b - a );
  }
  

  const array1 = [5, 2, 8, 1, 9, 3, 21];
  const array = [5, 2, 8, 1, 9, 3, 21];

  const result = foo(array);
  console.log(array1, "=> ", result); //мутация ??
