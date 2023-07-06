/*
6. Создайте класс Calculator, который содержит методы add() (сложение), subtract()
(вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
класса Calculator и выполните несколько операций.
*/
/* class Calculator6 {
    el1: number;
    el2: number;
    constructor(element1:number, element2:number){
        this.el1 = element1;
        this.el2 = element2;
    }
    add(){
        return this.el1+this.el2;
    }
    subtract(){
        return this.el1-this.el2;
    }
    multiply(){
        return this.el1*this.el2;
    }
    divide(){
        return this.el1/this.el2;
    }
} */
/* let calc6 = new Calculator6(10, 7);
console.log(calc6.add());
console.log(calc6.subtract());
console.log(calc6.multiply());
console.log(calc6.divide()); */
class Calculator6 {
    add(a, b) {
        if (typeof a == "number" && typeof b == "number") {
            return a + b;
        }
    }
    subtract(a, b) {
        if (typeof a == "number" && typeof b == "number") {
            return a - b;
        }
    }
    multiply(a, b) {
        if (typeof a == "number" && typeof b == "number") {
            return a * b;
        }
    }
    divide(a, b) {
        if (typeof a == "number" && typeof b == "number") {
            return a / b;
        }
    }
}
let calc6 = new Calculator6();
console.log(calc6.add(30, 20));
console.log(calc6.subtract(30, 20));
console.log(calc6.multiply(30, 20));
console.log(calc6.divide(30, 20));
