/* Напишите функцию sumOfDigits, которая принимает число и возвращает сумму
всех его цифр. */



/* function sumOfDigits(n) {
    let sum = 0
    let str = n.toString()

    for (let i = 0; i < str.length; i++) {
        sum += +str[i]
    }
    return sum

}

console.log(sumOfDigits(12)) */


/* function sumOfDigits(n) {
    let str = n.toString().split('')

    let res = str.reduce((sum, el) => {
       return  sum + +el
    }, 0)
    return res
}

console.log(sumOfDigits(15)) */