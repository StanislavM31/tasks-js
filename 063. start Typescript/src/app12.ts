/*
12. Создайте переменную str и присвойте ей строковое значение. Используя цикл
while, замените все гласные символы в строке на символ *
*/

let str12:string = prompt();
let array12:string = 'йуеыаоэяию';
let result12:string[] = [];

for(let i:number=0; i<str12.length; i++){
    if(array12.includes(str12[i])){
        result12.push('*');
    } else {
        result12.push(str12[i])
    }
}

console.log(result12);
