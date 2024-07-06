/* 
17. Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
содержащий только уникальные значения */

function foo(arr) {
  const arr_uniq = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr_uniq.indexOf(arr[i]) === -1) {
      arr_uniq.push(arr[i]);
    }
  }
  
  return arr_uniq;
}


const numbers = [1, 2, 5, 17, 5, 12, 5, 6, 1];
const result = foo(numbers);
console.log("уникальные числа", result);
