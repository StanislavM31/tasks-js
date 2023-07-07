/*
9. Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
getCircumference() (вычисление длины окружности). Создайте экземпляр класса
CircleC и выведите длину окружности. Длина окружности: 2 * π * r
*/

class CircleC9_1 {
    radius:number;
    constructor(radius:number){
        this.radius = radius;
    }
    PI:number = 3.14;
    getCircumference():number{
        return 2*this.PI*this.radius;
    }
}
let circleC9_1 = new CircleC9_1(12);
console.log(circleC9_1.getCircumference());

class CircleC9_2 {
    radius:number;
    circumference: number;
    PI:number = 3.14;

    setRadius(x:number):void{
        this.radius = x;
    }
    getCircumference():number{
        return 2*this.PI*this.radius;
    }
}
let circleC9_2 = new CircleC9_2();
circleC9_2.setRadius(5);
console.log(circleC9_2.getCircumference());

