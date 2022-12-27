/*
Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
'xx.xx.xxxx
*/

let a = '2022-12-21';
console.log(a);
console.log(`преобразуем дату...: ${a.split('-').reverse().join('.')}`);

