/*
1.(10) Реализуйте класс WordString, который содержит: конструктор со входной строкой;
метод ReverseString(). Ваша задача перевернуть исходную строку
*/

class WordString{
    constructor(str){
        this.str = str;
    }

    reverseString(){
        return this.str.split('').reverse().join('');
    }
}


let wordString = new WordString("тестоваястрока");
console.log(wordString.reverseString());