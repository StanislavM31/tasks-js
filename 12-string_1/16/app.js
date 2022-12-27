/*
Пользователь вводит строку. Вывести первый символ строки (индексы).
*/

let a = prompt('введите строку');

if(isNaN(a)){

    console.log(a[0]);
} else {
    console.log('error');
}
