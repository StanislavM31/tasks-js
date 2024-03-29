/*
20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
большим количеством страниц (count – одно из полей объекта)
*/
type iBook20 = {
    author:string;
    title: string;
    price: number;
    countOfPages: number
}
console.log(`=======`);

let arrayOfBooks20:iBook20[] = [
    {author:"Булгаков", title:'Мастер и Маргарита', price:10, countOfPages:500},
    {author:"Маяковский", title:'Лилечка', price:20, countOfPages:10},
    {author:"Хемингуэй", title:'Прощай оружие', price:30, countOfPages:300},
    {author:"Кастанеда", title:'Кактус', price:60, countOfPages:400},
    {author:"Пушкин", title:'Дубровский', price:70, countOfPages:450},
];


let result20MaxPages:iBook20[] = [];

result20MaxPages[0] = arrayOfBooks20[0];

for (let i:number = 0; i < arrayOfBooks20.length; i++) {
    if(result20MaxPages[0].countOfPages<arrayOfBooks20[i].countOfPages){
        result20MaxPages[0] = arrayOfBooks20[i];
    }
    console.log(`итерация ${i} обьект с maxPages: ${JSON.stringify(result20MaxPages[0])}`);
}

console.log(...result20MaxPages);
