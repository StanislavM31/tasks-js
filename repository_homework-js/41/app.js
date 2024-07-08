/* 
41. Напишите функцию, которая принимает строку и возвращает объект, где ключи - это буквы,
а значения - количество их повторений в строке.

*/
function foo(str) {
    const counts = {};
  
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
  
      if (letter.match(/[a-z]/)) {
        if (counts[letter]) {
          counts[letter]++;
        } else {
          counts[letter] = 1;
        }
      }
    }
  
    return counts;
  }
  
  const string = 'hi my dear friend';
  const result = foo(string);
  console.log(result);
