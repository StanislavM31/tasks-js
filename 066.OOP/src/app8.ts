/*
8. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод
getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и
выведите площадь окружности. Площадь круга: π * r^2
*/

class CircleR8 {
    PI:number = 3.14;
    radius:number;
    getArea():number{
        return this.PI*this.radius;
    }
}

let circleR8 = new CircleR8();
circleR8.radius = 10;
console.log(circleR8.getArea());

class CircleR8_1 extends CircleR8{
    setRadius(x:number):void{
        this.radius = x;
    }
}

let circleR8_1 = new CircleR8_1();
circleR8_1.setRadius(25);
console.log(circleR8_1.getArea());


