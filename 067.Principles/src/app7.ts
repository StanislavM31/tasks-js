/*
7. Создайте класс StringManipulator, который будет иметь методы reverseString,
isPalindrome, countVowels. Реализуйте функционал для разворота строки,
проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
Использовать Generics
*/

abstract class StringManipulator {
    value:string|number;
    vowels = "eyuioa";
    abstract reverseString(): string|number;
    abstract isPalindrome(): boolean;
    abstract countVowels(): number;
}

class StringManipulator_1 extends StringManipulator {
    constructor(value:(string|number)){
        super();
        this.value = value;
    }
    reverseString(): (string|number){
        if(typeof this.value == "number"){
            return this.value.toString().split("").reverse().join("");
        }
        return this.value.split('').reverse().join('');
    };
    isPalindrome(): boolean{
        let reverse_value = this.reverseString();
        return reverse_value == this.value;
    };
    countVowels(): number {
        let countVowels= 0;
        this.value.toString().split('').forEach((el:string)=>{
            if(this.vowels.includes(el)){
                countVowels++;
            }
        })
        return countVowels;

    }
}

let stringManipulator_1 = new StringManipulator_1(prompt("введите палиндром"));
console.log(`isPalindrome: ${stringManipulator_1.isPalindrome()}`);
console.log(`string "${stringManipulator_1.value}" has ${stringManipulator_1.countVowels()} vowels`);



