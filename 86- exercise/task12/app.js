/* Напишите класс D, который содержит метод filterEvenNumbers, принимающий
массив чисел в качестве аргумента и возвращающий новый массив, содержащий
только четные числа. */

class D {
    filterEvenNumbers(arr) {
        return arr.filter(el => el % 2 == 0)
    }
}

const res = new D()
console.log(res.filterEvenNumbers([1, 2, 3, 4]));