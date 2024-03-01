/* Удалить дубликаты вхождений элементов в массиве */
const arr = [1, 2, 2, 3, 3, 4]

let newArr = []

for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] === arr[i + 1]))
        newArr.push(arr[i])
}
console.log(newArr)
return newArr