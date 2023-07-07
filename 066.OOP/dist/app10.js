class Product10 {
    product = [
        { name: "стол", price: 10, title: "дубовый" },
        { name: "стул", price: 10, title: "дубовый" },
        { name: "шкаф", price: 50, title: "двухдверный" },
        { name: "стол", price: 25, title: "письменный" },
        { name: "стол", price: 30, title: "журнальный" },
    ];
    displayProductionInfo() {
        let arr = [];
        arr = this.product.filter((el) => {
            if (el.price > 20)
                return el;
        });
        return arr;
    }
}
let product10 = new Product10();
console.log(product10.displayProductionInfo());
