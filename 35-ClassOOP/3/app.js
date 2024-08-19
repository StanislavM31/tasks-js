/*
3. Реализуйте класс WordString, который будет иметь следующие методы: метод
reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
где первая буква заглавная и метод upperEvery, который делает заглавной первую
букву каждого слова этой строки.
*/

class WordString {
    
    reverseString(string){
        console.log(string.split('').reverse().join(''));
    }
    upperFirst = (string) => {
        console.log((string.split(' ')).map((el)=> el[0].toUpperCase() + el.slice(1)).join(' '));
    }
}

let wordString = new WordString();
wordString.reverseString(" строка наоборот");
wordString.upperFirst("строка с большими заглавными буквами")

