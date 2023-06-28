/*
14. Напишите программу, которая удаляет все пробелы из заданной строки и
выводит результат.
*/

let str14:string = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
console.log(str14);

str14 = str14.split(' ').join("");
console.log(str14);
