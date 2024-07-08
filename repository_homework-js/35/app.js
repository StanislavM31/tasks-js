/*
35. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все
строки переведены в верхний регистр.
*/
function foo(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }

  return result;
}

const strings = ["azzz", "dfg", "xbdf"];
const upperCaseStrings = foo(strings);
console.log(upperCaseStrings);
