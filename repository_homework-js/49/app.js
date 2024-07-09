/* 
49. Напишите функцию, которая принимает строку и возвращает новую строку, где каждое
слово начинается с заглавной буквы.

*/

function upper(str) {
  return str.split(' ').map((word) => (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())).join(' ');
}


const string = "привет дорогой пользователь";
const result = upper(string);
console.log(result);