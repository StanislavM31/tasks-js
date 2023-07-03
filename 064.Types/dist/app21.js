/*
21. Напишите программу, которая находит и выводит длину наиболее длинного
слова в заданной строке.
*/
let string21 = "hello hello!! hello!! hello!!! hello!!!! hello!!!!".split(" ");
let maxLengthString21 = "";
for (const el of string21) {
    if (maxLengthString21.length < el.length) {
        maxLengthString21 = el;
    }
}
console.log(`string with max length: ${maxLengthString21}`);
