/*
12. Создайте переменную str и присвойте ей строковое значение. Используя цикл
while, замените все гласные символы в строке на символ *
*/
let str12 = prompt();
let array12 = 'йуеыаоэяию';
let result12 = [];
for (let i = 0; i < str12.length; i++) {
    if (array12.includes(str12[i])) {
        result12.push('*');
    }
    else {
        result12.push(str12[i]);
    }
}
console.log(result12);
