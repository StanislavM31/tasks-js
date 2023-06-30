/*
11. На входе динамичный массив строк. Используя every выведите true если все
элементы массива соответствуют регулярному выражению почты
*/
let email = prompt('enter valid email');
console.log((/^[a-z\._\-]+@[a-z]+\.[a-z]{1,5}$/gm.test(email)) ? true : false);
