/* 
47. Напишите функцию, которая принимает строку и возвращает новую строку, где все
символы идут в обратном порядке
*/

function foo(str) {
  return str.split('').reverse().join('');
}

const string = "Hello";
const result = foo(string);
console.log(result); 
