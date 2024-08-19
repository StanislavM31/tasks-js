/*
4. Реализуйте класс MathСalculation. В него передается число n – количество
элементов массива. На основании числа формируется динамический массив из n
элементов внутри класса. Создать функцию для подсчета всех четных чисел
массива. Добавить проверки на ввод
*/

class MathCalculation {
    constructor(n) {
        this.n = n;
        this.array = this.generateArray(n);
    }


    generateArray(n) {
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(Math.floor(Math.random() * 10))
        }
        return arr;
    }

    sumElement() {
        return this.array.filter(num => num % 2 === 0).length;
    }
}

// Пример использования
const mathCalc = new MathCalculation(10);
console.log("Массив:", mathCalc.array);
console.log("Количество четных чисел:", mathCalc.sumElement());
