
/*
34. Напишите функцию, которая принимает массив строк и возвращает массив тех строк,
которые содержат подстроку 'abc'.
*/
function foo(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes('abc')) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  

  const strings = ['abcdefg', '123abc', '123abx', 'vcbvcv', 'rwerew'];
  const result = foo(strings);
  console.log(result);
