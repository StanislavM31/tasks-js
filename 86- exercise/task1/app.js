/* Сумма кратных 10 чисел массива. Решить через for, for of, while, do while, forEach,
reduce */

/* const arr = [1, 20, 30, 24, 38, 40];
let count = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) count += arr[i]
}
console.log(count)
return count; */

/* const arr = [1, 20, 30, 24, 38, 40];
let count = 0;

for (el of arr) {
    if (el % 10 === 0) count += el
}

console.log(count)
return count; */

/* const arr = [1, 20, 30, 24, 38, 40];
let count = 0
let i = 0

while (i < arr.length) {
    if (arr[i] % 10 === 0){
        count += arr[i]
    } 
    i++

}
console.log(count)
return count; */

/* const arr = [1, 20, 30, 24, 38, 40];
let count = 0
let i = 0

do {
    if (arr[i] % 10 === 0) {
        count += arr[i]
    }
    i++
} while (i < arr.length)

console.log(count)
return count; */

/* const arr = [1, 20, 30, 24, 38, 40];
let count = 0

arr.forEach((el) => {
    if (el % 10 === 0) {
        count += el
}})

console.log(count)
return count; */


/* const arr = [1, 20, 30, 24, 38, 40];


const sum = arr.reduce((count, el) => {
    if (el % 10 === 0) count += el
    return count
}, 0)

console.log(sum) */



