/* 
20. Напишите функцию, которая принимает массив строк и возвращает массив тех строк, 
которые начинаются с буквы 'A'
*/

function foo(arr) {
  const filtered = [];

  for (let i = 0; i < arr.length; i++) {
    const currentString = arr[i];

    if (currentString.charAt(0).toUpperCase() === 'A') {
      filtered.push(currentString);
    }
  }

  return filtered;
}

const strings = ['Apple', 'Banana', 'ABBA', 'Little', 'TYUI'];
const result = foo(strings);
console.log(result)
