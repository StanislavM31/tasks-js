class Fruit3 {
}
class Apple extends Fruit3 {
    array = [{ id: 1, title: "яблоко", price: 10 }, { id: 2, title: "груша", price: 20 }];
    getAppleInfo() {
        return this.array.filter((el) => {
            if (el.title == "яблоко")
                return el;
        });
    }
}
let apple3 = new Apple();
console.log(apple3.getAppleInfo());
