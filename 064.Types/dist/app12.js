/*
12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
позициях (индексах) массива
*/
let array12 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let result12 = array12.reduce((sum, el, index) => {
    if (index % 2 == 0) {
        console.log(index);
        return sum + el;
    }
    else {
        return sum + 0;
    }
}, 0);
console.log(result12);
