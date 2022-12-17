/* Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
Добавить проверки для строк. Удалить лишние пробелы*/

let a = prompt('введите строку ( например, hschool)');

if(isNaN(a)){
    a = a;
    console.log(a);
    b = a.replace(/ /g,'');
    console.log(b);
    c = b.split("");
    console.log(c);
    d = c.join('')
    console.log(d);
    d == 'hschool'? console.log(true): console.log(false);
} else console.log('ввели НЕ текст');