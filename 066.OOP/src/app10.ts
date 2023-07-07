/*
10. Создайте класс Product, который содержит объект product (продукт) с полями и
price (цена продукта), title (название продукта). Реализуйте метод
displayProductInfo(), который выводит массив продуктов, где цена > 20. Создайте
экземпляр класса Product и вызовите метод displayProductInfo().
*/
interface iType {
    name: string;
    price: number;
    title: string;
}

class Product10 {
    product:iType[] = [
    { name: "стол", price: 10, title: "дубовый"},
    { name: "стул", price: 10, title: "дубовый"},
    { name: "шкаф", price: 50, title: "двухдверный"},
    { name: "стол", price: 25, title: "письменный"},
    { name: "стол", price: 30, title: "журнальный"},
    ]
    displayProductionInfo():iType[]{
        let arr:iType[] = [];
        arr = this.product.filter((el:iType)=>{
            if(el.price>20) return el;
        })
        return arr;
    }
}

let product10 = new Product10();
console.log(product10.displayProductionInfo());
