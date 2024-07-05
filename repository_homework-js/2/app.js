/* 2. Напишите функцию, которая принимает строку и возвращает количество гласных в этой
строке. */

let str = 'Lets count some vowels ?'

function foo(str) {
    const glas = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (glas.includes(str[i])) {
            count++;
        }
    }
    return count;
}


const result = foo(str);
console.log(result);  