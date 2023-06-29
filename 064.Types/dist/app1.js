/*
1. Создайте массив чисел и найдите сумму всех
нечетных элементов в массиве.
 */
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let ar1 = array1.reduce((sum, cur) => {
    return cur % 1 === 0 ? sum + cur : sum + 0;
}, 0);
console.log(ar1);
