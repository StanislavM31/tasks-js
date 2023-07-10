/*
5. Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классынаследники "Автомобиль" (Car) и "Мотоцикл" (Motorcycle), которые расширяют
класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
особенностями каждого транспортного средства. (седержимое методов:
console.log)
 */

abstract class Vehicle {
    public abstract start():void;//абстрактная функция не содержит реализации
    public abstract stop():void;
}

class Car extends Vehicle {
    public start():void {
        console.log('start Car');
    }
    public stop():void {
        console.log('stop Car');
    }
}
class Motorcycle extends Vehicle {
    public start():void {
        console.log('start Motorcycle');
    }
   public  stop():void {
        console.log('stop Motorcycle');
    }
}

let car = new Car();
let motorcycle = new Motorcycle();
car.start();
car.stop();
motorcycle.start();
motorcycle.stop();