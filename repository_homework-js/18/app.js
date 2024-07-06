/* 
18. Напишите функцию, которая принимает строку и возвращает новую строку, где все 
пробелы заменены на дефисы.

*/

function foo(str) {
  return str.replace(/\s/g, "-");
}


const string = "aa bb cc dd ee";
const new_string = foo(string);

console.log(`${string}=> ${new_string}`);
