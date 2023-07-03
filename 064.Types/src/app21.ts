/*
21. Напишите программу, которая находит и выводит длину наиболее длинного
слова в заданной строке.
*/

let string21:string[] = "hello hello!! hello!! hello!!! hello!!!! hello!!!!".split(" ");
let maxLengthString21:string = "";

for (const el of string21) {
    if(maxLengthString21.length<el.length){
        maxLengthString21 = el;
    }
}

console.log(`string with max length: ${maxLengthString21}`);
