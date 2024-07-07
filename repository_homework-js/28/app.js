/* 
Напишите функцию, которая принимает строку и возвращает новую строку, где все буквы
переведены в противоположный регистр.
*/

function foo(str) {
  let reversedStr = "";

  for (let i = 0; i < str.length; i++) {
    const character = str.charAt(i);

    if (character === character.toUpperCase()) {
      reversedStr += character.toLowerCase();
    } else {
      reversedStr += character.toUpperCase();
    }
  }

  return reversedStr;
}


const text = "ПРИВЕТ пОлЬзОвАтЕлЬ";
const result = foo(text);
console.log(result);
