/* Создать функцию isMatch, которая проверяет, является ли 2 аргумент в виде
массива подмножеством другого массива */

function isMatch(arr1, arr2) {
    for(let i = 0; i< arr2.length; i++){
        if(!arr1.includes(arr2[i])){
            return false
        }
    }
    return true
}

console.log(isMatch([1, 2, 3, 4], [3, 4]))
