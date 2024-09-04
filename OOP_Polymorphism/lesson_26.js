/* 
1. Создайте класс Product, который будет иметь свойства name, price и quantity. Напишите метод
getTotalCost(products), который принимает список продуктов и возвращает общую стоимость всех
товаров в каталоге.
Входные: Product("Apple", 2, 5) → Результат: 10
Входные: Product("Orange", 3, 4)→ Результат: 12
*/

class Product {
  name;
  price;
  quantity;

  static getTotalCost(n, p, q) {
    return `общая стоимость всех товаров в каталоге: ${p * q}`;
  }
}

let r = Product.getTotalCost("Apple", 2, 5);
console.log(r);

// this - наследование
// super - полиморфизм

/* 2. Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
getAverageGrade(), который возвращает средний балл студента.
Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20) имеет средний балл 4.2"
Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22) имеет средний балл 3.0"
Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19) имеет средний балл 4.4«
 */

class Student {
  constructor(n, a, g) {
    this.name = n;
    this.age = a;
    this.graduate = g;
  }
  getAverageGrade() {
    let result =
      this.graduate.reduce((a, b) => a + b, 0) / this.graduate.length;
    console.log(`${this.name} (${this.age}) имеет средний балл ${result}`);
  }
}

let student = new Student("John", 19, [4, 4, 4, 5, 5]);
student.getAverageGrade();

/* 3. Реализуйте класс CommonPrefix, который будет принимать массив строк. В классе должен быть
метод findLongestPrefix(), который возвращает самый длинный общий префикс среди всех строк в
массиве. Если общего префикса нет, метод возвращает пустую строку.
Входные: new CommonPrefix(["flower", "flow", "flight"]) → Результат: "fl"
Входные: new CommonPrefix(["dog", "racecar", "car"]) → Результат: ""
Входные: new CommonPrefix(["interview", "interval", "internet"]) → Результат: "inte" */

class CommonPrefix {
  constructor(arr) {
    this.array = arr;
  }
  findLongestPrefix() {
    /*        let longest="";
        for (let i = 0; i < this.array.length; i++) {
            const element = this.array[i];//flower
            console.log(`слово: ${element}`);
            for (let j = 0; j < element.length; j++) {//o
                const symbol = element[j];
                console.log(`буква слова: ${symbol}`);
                
                if(element[i] == symbol){
                    console.log(`заходим во второй цикл со словом ${element} и буквой от слова ${element[i]}...`);
                    console.log(`${element[i]} == ${symbol} равно? добавляем!`);
                    longest +=element[j];
                    
                    console.log(`префикс: ${longest}`);
                    console.log(`===новая проходка по слову===`);
                    break
                } else{
                    console.log(`${element[i]} == ${symbol} НЕравно? НЕдобавляем!`);
                }
            }
            console.log(`=======берем новое слово=======`);
        }
        console.log('final=>', longest);
        
    } */

    /* ============================================================================== */
    /*      let prefix = this.array[0];//flower
   let result = "";
   for (let i = 0; i < this.array.length; i++) {
    
   if (prefix[i] == this.array[i][i]) {
    result += prefix[i];
} else break;
}
console.log(result);  */
    /* ============================================================================== */

    const minSize = Math.min(...this.array.map((el) => el.length));
    let pref = "";
    for (let i = 0; i < minSize; i++) {
      const letter = this.array[0][i];
      console.log(letter);

      if (!this.array.every((item) => item[i] === letter)) break;
      pref += letter;
    }
    console.log(pref);
  }
}
let prefix = new CommonPrefix([
  "flower",
  "flow",
  "flight",
  "flight",
  "fleght",
  "fpight",
  "light",
  "superflight",
  "fl",
  "f",
]);
prefix.findLongestPrefix();

/* 4. Создайте класс TwoSum, который будет принимать массив целых чисел nums и целое число target.
Реализуйте метод findIndices(), который возвращает индексы двух чисел, сумма которых равна
target. Гарантируется, что существует ровно одно решение, и вы не можете использовать один и
тот же элемент дважды.
Условия:
• Массив nums содержит только целые числа.
• Вы можете вернуть индексы в любом порядке.
• Для каждого набора входных данных существует ровно одно решение.
Входные: new TwoSum([2, 7, 11, 15], 9) → Результат: [0, 1]
Объяснение: Поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].
Входные: new TwoSum([3, 2, 4], 6)→ Результат: [1, 2]
Входные: new TwoSum([3, 2, 4], 6)→ Результат: [1, 2]
 */
class TwoSum {
  constructor(a, t) {
    this.array = a;
    this.target = t;
  }
  findIncludes() {

    let result = [];

    for (let el in this.array) {
      const a = this.array[el]
      for (let i = 0; i < this.array.length; i++) {
        const element = this.array[i];
        console.log(`el: ${a} + elemet ${element}`);
        if(el==i) break;
        if(a+element === this.target){
          result.push(el*1);
          result.push(i);
        }
      }
    }
    console.log(result);
  }
}

let twoSum = new TwoSum([2, 7, 11, 15], 9);
twoSum.findIncludes();

/* 5. Создайте родительский класс Number, который будет хранить число. Затем создайте дочерний
класс PalindromeChecker, который будет проверять, является ли это число палиндромом.
Входные: new PalindromeChecker(-121) → Результат: false
Входные: new PalindromeChecker(10) → Результат: false
Входные: new PalindromeChecker(12321) → Результат: true
 */

class Number {
  constructor(num){
    this.num = num;

  }
  PalindromeChecker(){
    console.log(this.num == ((this.num)+"".split('').reverse().join('')));
  }
}
let number = new Number(12321);
number.PalindromeChecker();
/*6. Создайте родительский класс Number, который будет хранить статичное число. Затем создайте
дочерний класс SquareRootCalculator, который будет содержать метод calculateSquareRoot(),
вычисляющий квадратный корень этого числа без использования встроенной функции Math.sqrt().
Входные: new SquareRootCalculator(16) → Результат: 4
Входные: new SquareRootCalculator(25) → Результат: 5
Входные: new SquareRootCalculator(1) → Результат: 1
*/
class Number2 {
  constructor(num){
    this.num = num;
  }
  squareRoot () {
  for (let i = 0; i <= this.num; i++) {
    if (i * i === this.num) return i;
  }
  
};
}

let number2 = new Number2(25);
console.log(number2.squareRoot());
/* 7. Создайте родительский класс NumberGenerator, который будет генерировать и возвращать
случайное число с помощью метода generateNumber(). Затем создайте дочерний класс
SquareRootCalculator, который переопределяет метод generateNumber() и находит квадратный
корень этого числа без использования встроенной функции Math.sqrt().
Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 16)→
Результат: 4
Входные: new SquareRootCalculator().generateNumber() (предположим, сгенерированное число 25) →
Результат: 5 */

class NumberGenerator{
  generateNumber(){
    let n = Math.floor(Math.random()*37);
    console.log(`this is generated num: ${n}`);
    return n;
  }
}

class SquareRootCalculator extends NumberGenerator{
   generateNumber(){
    let num = super.generateNumber();
    for (let i = 1; i <= num/2; i++) {
      if (i * i === num){
        console.log(`the root is ${i}`);
        return i;
      } else {
        console.log(`попробовали ${i}`);
      }
      
    }
    console.log('no root');
  }
}

let n = new SquareRootCalculator().generateNumber();
/* 8. Создайте родительский класс NumberArrayGenerator, который будет генерировать массив чисел
от 1 до 8 с помощью метода generateArray(). Затем создайте дочерний класс EvenNumberFilter,
который переопределяет метод generateArray() и оставляет в массиве только чётные числа.
Входные: new EvenNumberFilter().generateArray() → Результат: [2, 4, 6, 8] */

class NumberArrayGenerator {
  generateArray() {
      const numbers = [];
      for (let i = 0; i < 10; i++) {
          numbers.push(Math.floor(Math.random() * 9));
      }
      return numbers;
  }
}

class EvenNumberFilter extends NumberArrayGenerator {
  generateArray() {
      const numbers = super.generateArray();
      return numbers.filter(number => number % 2 === 0);
  }
}

const evenFilter = new EvenNumberFilter();
const result = evenFilter.generateArray();
console.log(result);
/* 
9. Создайте родительский класс RandomNumberArrayGenerator, который будет генерировать массив
случайных чисел с помощью метода generateArray(). Затем создайте дочерний класс MultipleFilter,
который переопределяет метод generateArray() и оставляет в массиве только те числа, которые
кратны 3 или 7.
Входные: new MultipleFilter().generateArray() → Результат: [21, 14, 9] (может быть другим, так как числа
случайные)
Входные: new RandomNumberArrayGenerator().generateArray() → Результат: [13, 21, 8, 9, 14, 27] (может быть
другим, так как числа случайные)
*/
class RandomNumberArrayGenerator {
  generateArray() {
      let numbers = [];
      for (let i = 0; i < 6; i++) {
          numbers.push(Math.floor(Math.random() * 22));
      }
      return numbers;
  }
}

class MultipleFilter extends RandomNumberArrayGenerator {
  generateArray() {
      let numbers = super.generateArray();
      let filteredNumbers = [];

      for (let number of numbers) {
          if (number % 3 === 0 || number % 7 === 0) {
              filteredNumbers.push(number);
          }
      }
      return filteredNumbers;
  }
}

const randomGenerator = new RandomNumberArrayGenerator();
const randomResult = randomGenerator.generateArray();
console.log(`массив из 6 случайных чисел ${randomResult}`);

const multipleFilter = new MultipleFilter();
const filteredResult = multipleFilter.generateArray();
console.log(`числа, кратные 3 или 7${filteredResult}`);