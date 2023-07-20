class Counter_init {
}
class Counter extends Counter_init {
    count;
    setCount(count) {
        this.count = count;
    }
    increment() {
        this.count++;
        return this.count;
    }
    decrement() {
        this.count--;
        return this.count;
    }
}
let counter = new Counter();
counter.setCount(100);
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.count);
