/*
16. Создайте массив чисел и определите, является ли он строго возрастающей
последовательностью
*/
let arr16 = [1, 2, 3, 4, 5, 6];
let result16 = [];
for (let i = 0; i < arr16.length; i++) {
    if (arr16[i] > arr16[i + 1]) {
        result16.push(false);
    }
    else {
        result16.push(true);
    }
}
if (result16.includes(false)) {
    console.log('не последовательность');
}
else {
    console.log('последовательность');
}
