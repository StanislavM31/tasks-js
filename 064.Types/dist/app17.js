/*
17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами.

*/
let arrayOfNumber17 = [1, 2, 3, 10, 4, 5, 6, 7, 8, 9];
let delta = 0;
for (let i = 0; i < arrayOfNumber17.length - 1; i++) {
    const element = arrayOfNumber17[i];
    if (delta < Math.abs(arrayOfNumber17[i] - arrayOfNumber17[i + 1])) {
        delta = Math.abs(arrayOfNumber17[i] - arrayOfNumber17[i + 1]);
    }
}
console.log(delta);
let max17, min17;
max17 = Math.max(...arrayOfNumber17);
min17 = Math.min(...arrayOfNumber17);
console.log(max17 - min17);
