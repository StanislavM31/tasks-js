/* 
7. Напишите функцию, которая принимает массив строк и возвращает массив только тех 
строк, которые содержат больше пяти символов.

*/

function foo(arr) {
  let filtered = arr.filter((el) => 
    el.length > 5
  );
  return filtered;
}

let string = ["aaa", "bbbbb", "ccccccc", "d", "ffffff"];
let result = foo(string);
console.log("длина >5",result);
