/*
15. Напишите программу, которая принимает строку и возвращает новую строку, в
которой каждое слово заменено на последнюю букву этого слова, а все остальные
символы остаются без изменений.
"Hello World" -> "o d“
*/

let str15:string = "Lorem ipsum is placeholder text";
let temp15_0:string[] = str15.split(' ');
let temp15_1 = temp15_0.map((el)=>{
    return el[el.length-1].toUpperCase();
});
console.log(...temp15_1);
console.log(temp15_1.join(''));


