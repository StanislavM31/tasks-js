/*
1. Пользователь вводит имя фамилию. Необходимо создать функцию
возвращающую строку вида «Привет, {имя} {фамилия}»
*/
let n = prompt('ИМЯ ?');
let sname = prompt('ФАМИЛИЯ?');

const hi =(a,b)=>{
    console.log(`Привет, ${a} ${b}`);
}

hi(n,sname);