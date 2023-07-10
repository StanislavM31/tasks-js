/*
6. Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
(хначение инициализируется через конструктор класса), методы getAverage,
getMax, getMin для вычисления среднего значения, максимального и
минимального элементов массива.
*/
abstract class ArrayAnalyzer_abstract { //нахожу самое главное
    abstract array: number[];
}
interface iArrayAnalyzer { //описываю структуру класса
    getAverage():number;
    getMax():number;
    getMin():number;
    array: number[];
}

class ArrayAnalyzer extends ArrayAnalyzer_abstract implements iArrayAnalyzer {
    array: number[];
    constructor(array: number[]) {
        super();
        this.array = array
    }
    getAverage():number {
        return this.array.reduce((acc: number, el: number) => acc + el, 0) / this.array.length;
    };
    getMax(): number {
        return Math.max(...this.array);
    };
    getMin(): number {
        return Math.min(...this.array);
    };
}

let arrayAnalyzer = new ArrayAnalyzer([1, 2, 3, 4, 17, 5, 6, 7, 8, 9, 0]);
console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());





