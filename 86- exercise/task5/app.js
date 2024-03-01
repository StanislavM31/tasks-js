/* Посчитать количество дубликатов вхождения каждого элемента в массиве. */
const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7]
let count = 0

for(let i =0; i< arr.length; i++){
    if(arr[i] === arr[i +1]) count++
}

console.log(count)
return count
