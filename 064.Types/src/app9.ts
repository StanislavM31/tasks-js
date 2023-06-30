/*
9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
элементы, оставив только уникальные значения.
*/

let arr9:(number|string)[] = ['one', 1, 2, 7, 'one', 'two', 'seven', 'eleven', 'one'];
let result9:(number|string)[] = [];

for (let element of arr9){

    if(!result9.includes(element)){
        result9.push(element);
    }
}

console.log(`[${arr9}] -> [${result9}]`);
