/*
14. Создайте класс Counter, который будет представлять счетчик. У класса Counter
должно быть свойство count (первоначальное значение задается сеттером) и
методы increment и decrement, которые будут увеличивать и уменьшать значение
счетчика соответственно на 1. Создайте объект класса Counter и проверьте работу
методов.
 */
interface iCounter {
    count: number;
}
abstract class Counter_init {
    abstract setCount(count:number): void;
    abstract increment(): number;
    abstract decrement(): number;
}
class Counter extends Counter_init implements iCounter{
    count: number;
    setCount(count: number): void {
        this.count = count;
    }
    increment(): number {
        this.count++
        return this.count
    }
    decrement(): number {
        this.count--
        return this.count
    }
}
let counter = new Counter();
counter.setCount(100);
counter.increment()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.count);

