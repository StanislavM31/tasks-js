/*
1. Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
и возвращает true, если оно является палиндромом (читается одинаково слева
направо и справа налево), и false в противном случае
*/

function isPalindrome(word: any): boolean {
    try {
        if (typeof word !== 'string') throw new Error(`not a string`);
        const reverseWord = word.split('').reverse().join('');
        if (reverseWord !== word) return false;
        return true
    } catch (error) {
        return error.message;
    }
}

/*
2. Напишите функцию calculateFactorial(n: number): number, которая принимает
число n и возвращает его факториал.
*/
function calculateFactorial(n: any): number | string {
    try {
        if (typeof n !== 'number') throw new Error("not a number");
        if (n < 0) throw new Error("нельзя найти факториал числа <0");
        let result: number = 1;
        for (let i: number = 1; i <= n; i++) {
            const element = i;
            result *= element;
        }
        return result
    } catch (error) {
        return error.message
    }
}
/*
3. Напишите функцию capitalizeString(str: string): string, которая принимает строку и
возвращает новую строку, в которой каждое слово начинается с заглавной буквы.
*/

function capitalizeString(str: any): string {
    try {
        if (typeof str !== 'string') throw new Error('передана не строка');
        let temp: string[] = str.split(' ');
        let result = '';
        for (let i = 0; i < temp.length; i++) {
            const element = temp[i];
            result += element[0].toUpperCase() + element.slice(1) + ' ';
        }
        return result.trim();
    } catch (error) {
        return error.message;
    }
}

/* 4. Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в
котором могут быть вложенные массивы, и возвращает новый массив, в котором
все элементы являются плоским списком без вложенности. */
function flattenArray(array: any): any[] {
    try {
        if (!Array.isArray(array)) throw new Error('not array')
        if (!array.length) throw new Error('empty array')
        return array.flat(Infinity);
    } catch (error) {
        return error.message;
    }
}
/*
6. Напишите функцию findMissingNumber(numbers: number[]): number, которая
принимает массив чисел, в котором пропущено одно число из
последовательности, и возвращает пропущенное число.
*/
function findMissingNumber(numbers: number[]): number {
    let result: number = numbers[0];
    for (let i: number = 0; i < numbers.length; i++) {
        if (numbers[i + 1]) {
            if (numbers[i + 1] - numbers[i] !== 1) {
                result = numbers[i] + 1;
            }
        }
    }
    return result;
}
/*
7. Напишите функцию findPairWithSum(numbers: number[], targetSum: number):
[number, number] | null, которая принимает массив чисел и целевую сумму, и
возвращает пару чисел из массива, сумма которых равна целевой сумме. Если
такая пара не найдена, функция должна возвращать null.
 */
function findPairWithSum(numbers: number[], targetSum: number): [number, number] | null {
    let result: [number, number] = [0, 0];
    for (let i: number = 0; i < numbers.length; i++) {
        for (let j: number = 0; j < numbers.length; j++) {
            if (i !== j) {
                if (numbers[i] + numbers[j] == targetSum) {
                    result[0] = (numbers[i]);
                    result[1] = (numbers[j]);
                    return result;
                }
            }
        }
    }
    return null;
}
/*
8. Создайте класс StringArray, который имеет свойство array (массив строк) и методы:
getLongestWord(): string - возвращает самое длинное слово из массива.
getUniqueWords(): string[] - возвращает массив уникальных слов из массива.
*/
class StringArray {
    array: string[] = ['Hello', 'my', 'dear', 'Ezequil', 'Hello', 'my', 'dear'];
    getLongestWord(): string {
        let l: number = 0;
        let result: string = '';
        this.array.forEach((el: string) => {
            if (l < el.length) {
                l = el.length;
                result = el
            };
        })
        return result
    };
    getUniqueWords(): string[] {
        let uniqueString: string[] = [];
        this.array.forEach((el: string) => {
            if (!uniqueString.includes(el)) {
                uniqueString.push(el)
            }
        })
        return uniqueString;
    };
}
/*
9. Создайте класс NumberArray, который имеет свойство array (массив чисел) и
методы:
getSum(): number - возвращает сумму всех чисел в массиве.
getEvenNumbers(): number[] - возвращает массив только четных чисел из массива.
*/
class NumberArray {
    array: number[] = [10, 20, 30, 41, 51]
    getSum(): number {
        return this.array.reduce((acc: number, next: number) => acc + next, 0);
    }
    getEvenNumbers(): number[] {
        let filtered: number[] = []
        filtered = this.array.filter((el: number) => el % 2 == 0);
        return filtered;
    }
}
/*
10. Создайте класс PersonArray, который имеет свойство array (массив объектов
Person) и методы:
getNames(): string[] - возвращает массив имен всех людей.
getAdults(): Person[] - возвращает массив только совершеннолетних людей.
getAverageAge(): number - возвращает средний возраст всех людей.
*/
interface Person {
    name: string;
    age: number;
}
class PersonArray {
    array: Person[] = [
        { name: 'Anna', age: 10 },
        { name: 'Bill', age: 20 },
        { name: 'Coul', age: 40 },
        { name: 'Gregory', age: 50 },
        { name: 'Sam', age: 30 },
    ]
    getNames(): string[]{
        const names:string[]=[];
        this.array.forEach(element => {
            names.push(element.name);
        });
        return names;
    }
    getAdults(): Person[]{
        const adults:Person[]=[];
        this.array.forEach(element => {
            if(element.age>18){
                adults.push(element);
            }
        });
        return adults;
    }
    getAverageAge(): number{
        let allAge:number = 0;
        this.array.map((el:Person)=>{
            allAge+=el.age
        })
        return allAge/this.array.length;
    }
}
/*
12. Реализуйте функцию, которая принимает в качестве параметра строку и
возвращает массив без каких-либо элементов с одинаковым значением рядом
друг с другом.
Написать тест для функции
'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
'12233’ -> [1, 2, 3]
Написать тест для функции
*/
function deleteDublicate(string:string) {
    let result = '';
    for (let i:number = 0; i < string.length; i++) {
        let element:string = string[i];
        if (element == string[i + 1] || element == string[i - 1]) {
            if (result[result.length - 1] == element) {
                continue;
            } else {
                result += element
            }
        }
        else {
            result += element;
        }
    }
    return result;
}
export {
    isPalindrome, calculateFactorial,capitalizeString,
    flattenArray, deleteDublicate, findMissingNumber,
    findPairWithSum,
    StringArray, NumberArray, PersonArray
}