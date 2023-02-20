/*
4. Реализуйте класс MathСalculation. В него передается число n – количество
элементов массива. На основании числа формируется динамический массив из n
элементов внутри класса. Создать функцию для подсчета всех четных чисел
массива. Добавить проверки на ввод
*/

class MathСalculation{
    constructor(n){
        this.n = n;
        this.arr = this.createArray(n);
        this.filtered = this.filterArray(this.arr)
    }
    createArray(length){
        const array = [];
        for (let i = 0; i < length; i++) {
            array.push(Math.floor(Math.random()*100)) ;
        }
        return array;
    }
    filterArray(array1){
        let filtered = array1.filter(el=>{
            if(el%2==0){
                return el;
            }
        })``
        return filtered.reduce((a,b)=>a+b);
    }
}

let mathСalculation = new MathСalculation(5);
console.log(mathСalculation);
console.log(mathСalculation.filtered);
