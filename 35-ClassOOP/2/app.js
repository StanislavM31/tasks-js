/*
2. Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
соответствующие функции. Добавить проверки на ввод
*/
class Calculator{
    constructor(x,y){
        if(!x || !y) throw new Error('не ввели числа')
        this.x = x;
        this.y = y;
    }

    sum = () => {
        console.log(this.x + this.y);
    }

    subtract = () => {
        console.log(this.x - this.y);
    }

    devide = () => {
        console.log(this.x / this.y);
    }

    mult = () => {
        console.log(this.x * this.y);
    }
}

let calc = new Calculator(10, 7);
calc.sum();
calc.subtract();
calc.devide()
calc.mult();


