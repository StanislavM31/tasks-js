/*
2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
соответствующие функции. Добавить проверки на ввод
*/

class Calculator{
    constructor(n1,n2){
        this.num1=+n1;
        this.num2=+n2;
    }

    sum(){
        return `${this.num1}+${this.num2} = ${this.num1+ this.num2}`;
    }
    dif(){
        return `${this.num1}-${this.num2} = ${this.num1-this.num2}`;
    }
    mylti(){
        return `${this.num1}-${this.num2} = ${this.num1*this.num2}`;
    }
    divide(){
        return `${this.num1}/${this.num2} = ${this.num1/this.num2}`;
    }
}

let calculator = new Calculator(100, 500);
console.log(calculator.sum());
console.log(calculator.dif());
console.log(calculator.mylti());
console.log(calculator.divide());
