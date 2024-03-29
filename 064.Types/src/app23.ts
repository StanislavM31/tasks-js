/*
23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
суммарную стоимостью всех товаров учитывая количество каждого.
Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...
*/

interface iStuff {
    название: string;
    цена: number;
    количество: number;
}

let goods:iStuff[] = [
    {название: "гладильная доска", количество:4, цена: 150},
    {название: "унитаз", цена:200, количество: 5},
    {название: "посудомойка", цена:500, количество: 2},
    {название: "шкаф", цена:400, количество: 1},
    {название: "стол", цена:250, количество: 4},
]

let amount:number = goods.reduce((acc:number, element:iStuff)=>{
    return acc+(element.цена * element.количество)
}, 0)

console.log(Math.round(amount));
