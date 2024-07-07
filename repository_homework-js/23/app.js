/*
23. Напишите функцию, которая принимает строку и возвращает количество слов в этой
строке.
*/
function countWordsfoo(str) {
  const words = str.split(" ");

  return words.length;
}

const string = "Напишите функцию, которая принимает строку и возвращает количество слов";
const result = foo(string);
console.log(result);
