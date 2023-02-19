/*
3. Реализуйте класс WordString, который будет иметь следующие методы: метод
reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
где первая буква заглавная и метод upperEvery, который делает заглавной первую
букву каждого слова этой строки.
*/

class WordString{
    constructor(str){
        this.string = str;
    }
    reverseString(){
        return `${this.string.split('').reverse().join('')}`;
    }

    upperFirst(){
        let temp = this.string.slice(1);
        return `${this.string[0].toUpperCase()+temp}`
    }
    upperEvery(){
/*         let array = this.string.split(' ');
        for (let i = 0; i < array.length; i++) {
            const element = array[i];

        } */

        let array = this.string.split(' ');
        let arrStr = array.map(function(el){
            return el[0].toUpperCase() + el.slice(1);
        })
        return arrStr.join('');
    }
}

let wordString = new WordString(`test test test`);
console.log(wordString.reverseString());
console.log(wordString.upperFirst());
console.log(wordString.upperEvery());