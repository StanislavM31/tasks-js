/*
9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
элементы, оставив только уникальные значения.
*/
let arr9 = ['one', 1, 2, 7, 'one', 'two', 'seven', 'eleven', 'one'];
let result9 = [];
for (let element of arr9) {
    if (!result9.includes(element)) {
        result9.push(element);
    }
}
console.log(`[${arr9}] -> [${result9}]`);
