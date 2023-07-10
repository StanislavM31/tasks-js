/*
6. Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
(хначение инициализируется через конструктор класса), методы getAverage,
getMax, getMin для вычисления среднего значения, максимального и
минимального элементов массива.
*/
class ArrayAnalyzer {
    array;
    constructor(array) {
        this.array = array;
    }
    getAverage() {
        return this.array.reduce((acc, el) => acc + el, 0) / this.array.length;
    }
    ;
    getMax() {
        return Math.max(...this.array);
    }
    ;
    getMin() {
        return Math.max(...this.array);
    }
    ;
}
let arrayAnalyzer = new ArrayAnalyzer([1, 2, 3, 4, 17, 5, 6, 7, 8, 9, 0]);
console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());
