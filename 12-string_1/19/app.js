/*
Ввести строку. Проверить является ли это число или текст. Если число, то
выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
противном случае false
*/

let a = prompt('введите что-нибудь(текст/число)');

if(isNaN(a)){
    a = 'hschool'? console.log(true): console.log(false);
} else {
    a%2 == 0? console.log('четное'): console.log('нечетное');
}
