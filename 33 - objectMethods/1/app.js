/*
1. На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
вывести true при наличии совпадения, false в противном случае
 */
let obj = {
    id:1233,
    type: `m`,
    age: 23,
    visa: true,
}

let str = `age`;

console.log(obj.hasOwnProperty(str));