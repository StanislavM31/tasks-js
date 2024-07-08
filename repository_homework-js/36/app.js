/* 
36. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все
строки переведены в нижний регистр.

*/

function foo(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i].toLowerCase());
    }
  
    return result;
  }
  
  const strings = ['QWERTY', 'ASDFGH', 'ZXCVBNM'];
  const lowerCaseStrings = foo(strings);
  console.log(lowerCaseStrings);