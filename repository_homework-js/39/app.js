/* 
39. Напишите функцию, которая принимает массив строк и возвращает массив, где строки
отсортированы в обратном алфавитном порядке.
*/

function foo(arr) {
  return arr.sort((a, b) => {
    const firstLetterA = a[0];
    const firstLetterB = b[0];

    if (firstLetterA < firstLetterB) {
      return 1;
    } else if (firstLetterA > firstLetterB) {
      return -1;
    }
    return 0;
  });
}

const array = [ 'zabix', 'привет', 'анонимный', 'пользователь'];
const resul = foo(array);
console.log(resul);