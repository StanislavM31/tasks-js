/* 
1.
 Создайте класс Rectangle, который будет иметь свойства width и height. Напишите метод getArea(), 
которыйвозвращаетплощадьпрямоугольника.
 Входные: Rectangle(5, 10) → Результат: 50
 Входные: Rectangle(3, 7) → Результат: 21
 Входные: Rectangle(6, 9) → Результат: 54
*/

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  s() {
    console.log(`S of rectangle is: ${(this.w * this.h) / 2}`);
  }
}

let rectangle = new Rectangle(10, 5);
rectangle.s();
/* 
2. Создайте класс Student, который будет содержать имя, возраст и массив оценок. Напишите метод
 getAverageGrade(), который возвращает средний баллстудента.
 Входные: Student("Alice", 20, [5, 4, 5, 3, 4]) → Результат: "Alice (20) имеет средний балл 4.2"
 Входные: Student("Bob", 22, [3, 2, 3, 4, 3]) → Результат: "Bob (22) имеет средний балл 3.0"
 Входные: Student("John", 19, [4, 4, 4, 5, 5]) → Результат: "John (19) имеет средний балл 4.4"
*/
class Student {
  constructor(name, age, d) {
    this.name = name;
    this.age = age;
    this.d = d;
  }

  getAverage() {
    console.log(
      `average is: ${
        (this.name,
        this.age,
        this.d.reduce((prev, next) => prev + next, 0) / this.d.length)
      }`
    );
  }
}

let student = new Student("Alice", 20, [5, 4, 5, 3, 4]);
student.getAverage();

/* 
3. Создайте класс Car с параметрами make, model, year. Напишите метод getCarAge(currentYear), 
которыйвозвращаетвозрастмашины.
 Входные: Car("Toyota", "Camry", 2015) → Результат: Возраст машины: 9 лет
 Входные: Car("Honda", "Civic", 2020) → Результат: Возраст машины: 4 года
 Входные: Car("Ford", "Mustang", 1967) → Результат: Возраст машины: 57 лет
*/

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge(y) {
    console.log(`Возраст машины: ${y -this.year}`);
  }
}
let car = new Car("Toyota", "Camry", 2015);
car.getCarAge(2024);
/* 4. Создайте класс StringRepository, который имеет статичный массив words. Наследуйте от него класс
 FilteredWords, добавив метод getWordsByLength(length), который возвращает только те слова,
 длинакоторыхравна заданномузначению.
 Входные:
 const repo = new FilteredWords(["apple", "banana", "kiwi", "plum"]);
 repo.getWordsByLength(5);
 → Результат: ["apple", "plum"]
 Входные:
 const repo = new FilteredWords(["cat", "dog", "elephant", "mouse"]);
 repo.getWordsByLength(3);
 → Результат: ["cat", "dog"] */
class StringRepository {
  words = [
    "apple",
    "banana",
    "kiwi",
    "plum",
    "cat",
    "dog",
    "elephant",
    "mouse",
  ];
}

class FilteredWords extends StringRepository {

  FilteredWords(n) {
    console.log(this.words.filter((el) => el.length === n));
  }
}
let filterwords = new FilteredWords();
filterwords.FilteredWords(3);

/* 5. Создайте класс NumberGenerator с методом generateNumbers(size), который возвращает массив
 чисел от 1 до size. Наследуйте от него класс EvenNumbers, добавив метод getEvenNumbers(size), 
которыйвызываетgenerateNumbers(size) и фильтрует толькочетные числа.
 Входные: EvenNumbers(6).getEvenNumbers() → Результат: [2, 4, 6]
 Входные: EvenNumbers(10).getEvenNumbers() → Результат: [2, 4, 6, 8, 10]
 Входные: EvenNumbers(3).getEvenNumbers() → Результат: [2] */
 class NumberGenerator{
    array = [];

    getEvenNumbers(size){
        
        for (let i = 0; i <= size; i++) {
            const element = Math.floor((Math.random()*11));
            this.array.push(element);
        }
        console.log(`Результат: ${this.array}`);
        
    }
 }
let numbGenerator = new NumberGenerator();
numbGenerator.getEvenNumbers(5);
/* 
6. Создайте класс SentenceRepository, который имеет массив строк sentences и метод getSentences(), 
возвращающий этот массив. Наследуйте от него класс LongestSentence, добавив метод
 getLongestSentence(), который возвращает самую длинную строкупоколичествусимволов.
 Входные:
 const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
 repo.getLongestSentence();
 → Результат: "This is a longer sentence"
 Входные:
 const repo = new LongestSentence(["JavaScript is fun", "Coding", "Learning new things"]);
 repo.getLongestSentence();
 → Результат: "JavaScript is fun"
 Входные:
 const repo = new LongestSentence(["Small", "Medium sized", "A sentence that is quite long"]);
 repo.getLongestSentence();
 → Результат: "A sentence that is quite long"
 */
class SentenceRepository{
    constructor(array){
        this.array = array;
    }
}
class LongestSentence extends SentenceRepository{
    getThe(){
        let longest = "";
        (this.array).forEach(element => {
            console.log(element);
            if(longest.length<element.length) {
                longest = element;
            }
        });
        
    }
}
let longestSentence = new LongestSentence(["Small", "Medium sized", "A sentence that is quite long"])
longestSentence.getThe()
/* 
7. Создайте класс Person с атрибутом name. Наследуйте от него класс Employee, добавив атрибуты
 position и monthly_salary. Реализуйте метод getAnnualSalary(), возвращающий годовую зарплату.
 Входные: Employee("Alice", "Developer", 5000) → Результат: 60000
 Входные: Employee("Bob", "Manager", 7000) → Результат: 84000
 Входные: Employee("Charlie", "Designer", 4000) → Результат: 48000 */
 class Person {
    constructor(n){
        this.name =n;
    }
    tin(){
        console.log('tin');
        
    }
}
class Employee extends Person{
    constructor(n, p, ms){
        super(n);
        this.position=p;
        this.monthly_salary=ms;
    }
    
    tin(){
        super.tin()
        
    }

    getAnnualSalary(){
        console.log(`Employee ${this.name} position: ${this.position} year salary: ${this.monthly_salary*12}`);
    }
 }

 let employee = new Employee("Charlie", "Designer", 4000);
 employee.getAnnualSalary();
 employee.tin();
 /* 
  8. Создайте класс Vehicle с атрибутом speed. На основе этого класса создайте класс Car, добавив
 атрибут brand и метод getInfo(), который выводит информацию о машине в формате "Brand: 
<brand>, Speed: <speed>".
 Входные: Car("Toyota", 120).getInfo() → Результат: "Brand: Toyota, Speed: 120"
 Входные: Car("Ford", 150).getInfo() → Результат: "Brand: Ford, Speed: 150"
 Входные: Car("BMW", 180).getInfo() → Результат: "Brand: BMW, Speed: 180
 */
class Vehicle{
    constructor(b){
        this.brand = b;
    }
}

class Car1 extends Vehicle{
    constructor(b,s){
        super(b);
        this.speed = s;
    }
    getInfo(){
        console.log(`*Brand: "${this.brand}", *speed:${this.speed}`);
        
    }
}
let car1 = new Car1("BMW", 180);
car1.getInfo()

/* 
 9. Создайте класс DataGenerator с полем size и методом generateArray(), который возвращает массив
 чисел от 1 до size. Наследуйте от него класс SquareArray, добавив метод getSquareArray(), который
 вызываетgenerateArray() и возвращает массив, где каждый элемент возведенв квадрат.
 Входные: SquareArray(3).getSquareArray() → Результат: [1, 4, 9]
 Входные: SquareArray(5).getSquareArray() → Результат: [1, 4, 9, 16, 25]
 Входные: SquareArray(2).getSquareArray() → Результат: [1, 4]
*/
class DataGenerator{
    constructor(s){
        this.size = s;
    }
    generateArray(){
        let array = [];
        for (let i = 0; i <= this.size; i++) {
            const element = Math.floor(Math.random()*11);
            array.push(element);
        }
        console.log("было", array);
        
        return array;
    }
}

class SquareArray extends DataGenerator {
    getSquaredArray(){
        let array = (this.generateArray()).map((el)=>el*el);
        console.log("стало",array);
        
    }
}

let sq = new SquareArray(5);
sq.getSquaredArray()