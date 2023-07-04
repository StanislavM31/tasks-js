/*
7. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести тот товар, где количество * прайс является наибольшим значением
 */

interface iThings7 {
    id: number;
    title: string;
    count: number;
    price: number;
}

let array7:iThings7[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]


function findMax7(array:iThings7[]):iThings7{
    let max:iThings7 = array[0];

    array.forEach((el)=>{
        if(max.price < el.price){
            max = el;
        }
    })
    return max;
}

console.log(findMax7(array7));

