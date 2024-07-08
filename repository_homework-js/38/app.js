/* 
38. Напишите функцию, которая принимает строку и возвращает новую строку, где все гласные
заменены на '*'.

*/


function replaceLetters(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += '*';
    } else {
      result += str[i];
    }
  }

  return result;
}

const string = 'Hi my dear FRIEND';
const result = replaceLetters(string);
console.log(result);