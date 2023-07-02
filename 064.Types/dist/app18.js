/*
18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
Булгаков (author – одно из полей объекта)
*/
let array = [
    { id: 1, author: "Булгаков", title: 'Мастер и Маргарита' },
    { id: 2, author: "Маяковский", title: 'Лилечка' },
    { id: 3, author: "Толстой", title: 'Война и мир' },
];
let filtered;
filtered = array.filter((object) => {
    if (object.author == 'Булгаков') {
        return object;
    }
});
console.log(...filtered);
