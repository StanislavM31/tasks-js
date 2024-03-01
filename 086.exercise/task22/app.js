/* Напишите функцию sieveOfEratosthenes, которая принимает число n и возвращает
массив всех чисел до n. */

 function sieveOfEratosthenes(n) {
    let arr = []

    for (let i = 0; i <= n; i++){
     arr.push(i)
    }
    return arr
}

sieveOfEratosthenes(4) 