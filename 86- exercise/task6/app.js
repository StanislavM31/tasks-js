/* Перевернуть входную строку. Решить задачу несколькими алгоритмами. */
let str = 'hello'

/* let newStr = str.split('').reverse().join()
console.log(newStr) */


let newStr = []

for (let i = 0; i < str.length; i++) {
    newStr.unshift(str[i])
}

console.log(newStr.join(''))
return newStr
