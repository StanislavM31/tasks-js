/* 
50. Напишите функцию, которая принимает массив чисел и возвращает объект, где ключи - это
числа, а значения - их квадраты.
*/

function foo(arr) {
  return arr.reduce(function(obj, num) {
      obj[num] = num * num;
      return obj;
  }, {});
}


const array = [1, 2, 3, 4, 5];
const result = foo(array);
console.log(result);