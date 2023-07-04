/*
4. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести итоговую стоимость на складе.
Итоговая стоимость = количество * цена + ...
*/
let array4 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
function countAllprice(array) {
    let result4 = array.reduce((acc, el) => acc + el.price * el.count, 0);
    return result4;
}
console.log(countAllprice(array4));
