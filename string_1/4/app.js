
/* Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true,
в противном случае false (isNaN) */

let x = +prompt('Введите число');
console.log(typeof x);
console.log(`вы ввели ${x}`);
console.log('Проверка на isNan(x)');
console.log(Boolean(isNaN(x)));

console.log(typeof NaN);
