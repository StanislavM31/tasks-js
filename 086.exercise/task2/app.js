/* Найти максимальное и минимальное значение массива. Решить через for, for of,
while, do while, forEach */

/* const arr = [2, 4, 6, 9]
let min = arr[0];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(min)
console.log(max) */

/* const arr = [2, 4, 6, 9]
let min = arr[0];
let max = arr[0];

for (el of arr) {
    if (el < min) {
        min = el
    }
    if (el > max) {
        max = el
    }
}

console.log(min)
console.log(max) */

/* const arr = [2, 4, 6, 9]
let min = arr[0];
let max = arr[0];
let i = 0;

while (i < arr.length) {
    if (arr[i] < min) {
        min = arr[i]
    }

    if (arr[i] > max) {
        max = arr[i]
    }
    i++
}

console.log(min)
console.log(max) */

/* const arr = [2, 4, 6, 9]
let min = arr[0];
let max = arr[0];
let i = 0;

do {
    if (arr[i] < min) {
        min = arr[i]
    }

    if (arr[i] > max) {
        max = arr[i]
    }
    i++
} while (i < arr.length)

console.log(min)
console.log(max) */

/* const arr = [2, 4, 6, 9]
let min = arr[0];
let max = arr[0];

arr.forEach((el) => {
    if (el < min) {
        min = el
    } 

    if (el > max) {
        max = el
    } 
})

console.log(min)
console.log(max) */


