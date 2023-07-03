/* let arrayOfBooks:Array<iBook19>[] = [
    {author:"Булгаков", title:'Мастер и Маргарита', price:40},
    {author:"Маяковский", title:'Лилечка', price:40},
    {author:"Толстой", title:'Война и мир', price:40},
]; */
let arrayOfBooks19 = [
    { author: "Булгаков", title: 'Мастер и Маргарита', price: 10 },
    { author: "Маяковский", title: 'Лилечка', price: 20 },
    { author: "Хемингуэй", title: 'Прощай оружие', price: 30 },
    { author: "Кастанеда", title: 'Кактус', price: 60 },
    { author: "Пушкин", title: 'Дубровский', price: 70 },
];
let result19 = [];
result19 = arrayOfBooks19.filter((el) => {
    if (el.price > 50) {
        return el;
    }
});
console.log(result19);
