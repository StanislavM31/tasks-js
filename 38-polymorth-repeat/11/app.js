/*
Напишите программу, которая находит полное число метров по заданному числу
сантиметров. Добавить проверку на ввод только чисел
345 -> 3
100 -> 1
*/

let a = prompt('введите число');

if (isNaN(a)){
    console.log('ошибка');
} else {
    
    console.log(`${Math.floor((a/100))} метра`);
}
