/*
6. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести средний прайс среди всех продуктов
*/
let array6 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
function middlePrice(array) {
    return array.reduce((acc, el) => acc + el.price, 0) / array.length;
}
console.log(middlePrice(array6));
