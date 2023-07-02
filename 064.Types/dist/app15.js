/*
15. На входе динамичный массив строк. Используя forEach создайте новый массив из
элементов, каждое значение которого имеет вид !name
[“hschool”, “company”] -> [“!hschool”, “!company”]
*/
let array15 = ['hschool', 'company'];
let result15 = array15.map((el) => `!${el}`);
let result15_ = [];
array15.forEach((el) => {
    result15_.push(`!${el}`);
});
console.log(result15_);
