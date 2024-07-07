/*
24. Напишите функцию, которая принимает массив строк и возвращает массив, где каждый
элемент - это первая буква исходного элемента.
*/
function getFirstLetters(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];

    const element = word.charAt(0);
    result.push(element);
  }

  return result;
}

const string = ["aaa", "dsvfd", "liukj", "ggg"];
const result = foo(string);
console.log(result);
