/*
7. Создайте класс StringManipulator, который будет иметь методы reverseString,
isPalindrome, countVowels. Реализуйте функционал для разворота строки,
проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
Использовать Generics
*/
class StringManipulator {
    value;
    vowels = "eyuioa";
}
class StringManipulator_1 extends StringManipulator {
    constructor(value) {
        super();
        this.value = value;
    }
    reverseString() {
        if (typeof this.value == "number") {
            return this.value.toString().split("").reverse().join("");
        }
        return this.value.split('').reverse().join('');
    }
    ;
    isPalindrome() {
        let reverse_value = this.reverseString();
        return reverse_value == this.value;
    }
    ;
    countVowels() {
        let countVowels = 0;
        this.value.toString().split('').forEach((el) => {
            if (this.vowels.includes(el)) {
                countVowels++;
            }
        });
        return countVowels;
    }
}
let stringManipulator_1 = new StringManipulator_1(prompt("введите палиндром"));
console.log(`isPalindrome: ${stringManipulator_1.isPalindrome()}`);
console.log(`string "${stringManipulator_1.value}" has ${stringManipulator_1.countVowels()} vowels`);
