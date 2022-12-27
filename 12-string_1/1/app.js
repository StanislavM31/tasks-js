/*
Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
Добавить проверки для строк. Удалить лишние пробелы

*/

let a = prompt('введите строку');

if(isNaN(a)){
    a == 'hsschool' ? console.log(true): console.log(false);
} else {
    console.log('ошибка')
}