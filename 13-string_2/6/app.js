/*
Ввести строку. Проверить является ли это число или строка. Если число, то
ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
Убрать лишние пробелы
*/

let str = prompt('введите строку:');


if(isNaN(str)){
    str.trim();
    let x = str.replaceAll(" ", "");
    let a = x[0];
    let y = a.toUpperCase();
    let t = y + x.slice(1);
    console.log(t);
} else {
    console.log(`вы ввели число. ошибка ввода`);
}