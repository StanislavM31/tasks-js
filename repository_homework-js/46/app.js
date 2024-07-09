/* 
46. Напишите функцию, которая принимает массив чисел и возвращает новый массив, где 
каждый элемент возведен в степень, равную его индексу
*/

function foo(arr) {
    return arr.map((num, index) => Math.pow(num, index))
    };


const numbers = [2, 3, 4, 5];
const result = foo(numbers);
console.log(result);