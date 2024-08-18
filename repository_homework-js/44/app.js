/*
44. Напишите функцию, которая принимает массив строк и возвращает новый массив, где все
строки начинаются с заглавной буквы.

*/
function foo(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      const str = arr[i];
      const upperString = str.charAt(0).toUpperCase() + str.slice(1);
      result.push(upperString);
    }
  
    return result;
  }
  
  const array_of_strings = ["hello", "my", "dear", "friend"];
  const res = foo(array_of_strings);
  console.log(res);

