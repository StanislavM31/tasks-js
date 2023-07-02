/*
14. Напишите программу, которая находит и выводит наиболее часто встречающийся
символ в заданной строке.
*/
let str14 = 'aabbccssssssssssssssabc'.split('');
let obj = {};
for (let i = 0; i < str14.length; i++) {
    const element = str14[i];
    if (obj.hasOwnProperty(element)) {
        obj[element] += 1;
    }
    else {
        obj[element] = 1;
    }
}
const values = Object.values(obj);
const max = Math.max(...values);
for (let key in obj) {
    if (obj[key] === max) {
        console.log(key, obj[key]);
        break;
    }
}
console.log();
