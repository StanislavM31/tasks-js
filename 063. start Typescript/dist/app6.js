/* 6. Напишите программу, которая проверяет, является ли заданная строка
палиндромом. */
let str6 = prompt();
(str6 === str6.split('').reverse().join("")) ? console.log('палиндром') : console.log("непалиндром");
alert(str6 === str6.split('').reverse().join("") ? 'палиндром' : 'непалиндром');
