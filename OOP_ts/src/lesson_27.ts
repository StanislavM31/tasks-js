/* 
1. Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
(вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Формула
для вычисления площади прямоугольника: S = длина * ширина
Входные: Rectangle(5, 4) → Результат: 20
Входные: Rectangle(10, 3) → Результат: 30
Входные: Rectangle(7, 7) → Результат: 49
2. Создайте абстрактный класс Animal (Животное) с абстрактным методом makeSound() (издатьЗвук).
Затем создайте два дочерних класса:
• Dog
• Cat
Каждый из этих классов должен наследовать Animal и реализовывать метод makeSound(),
возвращая соответствующий звук животного.
Входные: Dog().makeSound() → Результат: "Гав-гав"
Объяснение: Метод makeSound() для объекта класса Dog должен вернуть звук собаки.
Входные: Cat().makeSound() → Результат: "Мяу"
Объяснение: Метод makeSound() для объекта класса Cat должен вернуть звук кошки.
3. Создайте интерфейс iAccount со следующими методами:
• balance: хранит цисловое значение баланса света
• getBalance(): возвращает текущий баланс счета
• deposit(amount: number): пополняет счет на указанную сумму
• withdraw(amount: number): снимает указанную сумму со счета
Реализуйте класс Account, который имплементирует интерфейс iAccount. Реализуйте все методы
интерфейса. Перед снятием withdraw проверяйте, достаточно ли средств на счете. Если средств
недостаточно, выбрасывайте ошибку.
4. Создайте абстрактный класс "Транспортное средство" (Vehicle), в котором будут два абстрактных
метода: "завести" (start) и "остановить" (stop). Реализуйте два класса-наследника — "Автомобиль"
(Car) и "Мотоцикл" (Motorcycle). Эти классы должны расширять класс "Транспортное средство" и
реализовать методы "завести" и "остановить", чтобы они соответствовали поведению этих
транспортных средств (например, через console.log).
Входные:
let car = new Car();
car.start();
→ Результат: Car started
Входные:
let car = new Car();
car.stop();
→ Результат: Car stopped
Входные:
let motorcycle = new Motorcycle();
motorcycle.start();
→ Результат: Motorcycle started
Входные:
let motorcycle = new Motorcycle();
motorcycle.stop();
→ Результат: Motorcycle stopped
Входные: [ {"id": 1, "title": "яблоко", "price": 50}, {"id": 2, "title": "банан", "price": 30}, {"id": 3, "title": "груша", "price":
45} ]
→ Результат: {"id": 1, "title": "яблоко", "price": 50}
Входные: [ {"id": 1, "title": "банан", "price": 35}, {"id": 2, "title": "киви", "price": 70}} ] → Результат: null
6. Создайте интерфейс iValidation, который будет описывать методы для проверки: isValidEmail(),
isValidDate(), isValidPath(). Создайте класс Validation, который реализует интерфейс iValidation.
Класс будет иметь публичные методы: isValidEmail(), isValidDate(), isValidPath(). Конструктор класса
Validation должен принимать параметры email, date, path и инициализировать их как поля класса.
5. Создайте абстрактный класс Fruit (Фрукт) со следующим полем:
• fruits: массив объектов, где каждый объект имеет свойства id, title
(название) и price (цена)
Затем создайте дочерний класс Apple (Яблоко), который наследует
Fruit. В классе Apple реализуйте метод getAppleInfo(), который должен
возвращать информацию о яблоке из массива fruits, где title равно
"яблоко".
Входные:
let validation = new Validation('example@mail.com',
'2023-09-10', '/usr/local/bin');
validation.isValidEmail();
→ Результат: true
Входные:
let validation = new Validation('invalid-email', '2023-09-
10', '/usr/local/bin');
validation.isValidEmail();
→ Результат: false
7. Создайте класс ArrayAnalyzer, который будет содержать массив чисел как поле класса,
инициализируемое через конструктор. Реализуйте методы:
• getAverage для вычисления среднего значения массива,
• getMax для поиска максимального значения в массиве,
• getMin для поиска минимального значения в массиве.
8. Создайте класс StringManipulator, который будет иметь три метода:
• reverseString(str) — разворачивает строку,
• isPalindrome(str) — проверяет, является ли строка палиндромом,
• countVowels(str) — подсчитывает количество гласных букв в строке.
Входные:
let analyzer = new ArrayAnalyzer([1, 2, 3, 4, 5]);
analyzer.getAverage();
→ Результат: 3
Входные:
let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
analyzer.getMax();
→ Результат: 30
Входные:
let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
analyzer.getMin();
→ Результат: 5
Входные:
let manipulator = new StringManipulator();
manipulator.reverseString('hello');
→ Результат: 'olleh
Входные:
let manipulator = new StringManipulator();
manipulator.isPalindrome('madam');
→ Результат: true
9. Создайте интерфейс iPwd, который описывает метод showPwd. Реализуйте класс Pwd, который
будет содержать метод showPwd, возвращающий случайно сгенерированный пароль из 8 цифр.
Создайте класс Validation, который наследуется от Pwd и переопределяет метод showPwd,
вызывая метод родительского класса через super и дополняя его выводом результата в консоль.
10. Создайте абстрактный класс University, который содержит:
• абстрактный метод getStudentById(id: number),
• поле students — массив объектов студентов.
Реализуйте класс Student, который наследуется от University и реализует метод getStudentById,
возвращающий объект студента по его ID.
const students = [
 new Student(1, 'Alice'),
 new Student(2, 'Bob'),
 new Student(3, 'Charlie')
];
Входные:
let university = new UniversityStudent([
 new Student(1, 'Alice'),
 new Student(2, 'Bob')
]);
university.getStudentById(1);
→ Результат: { id: 1, name: 'Alice' }
11. Создайте класс Counter, который будет представлять счетчик. У класса должно быть:
• Свойство count, значение которого задается через сеттер.
• Метод increment — увеличивает значение счётчика на 1.
• Метод decrement — уменьшает значение счётчика на 1
*/

/* 1. Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
(вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Формула
для вычисления площади прямоугольника: S = длина * ширина
Входные: Rectangle(5, 4) → Результат: 20
Входные: Rectangle(10, 3) → Результат: 30
Входные: Rectangle(7, 7) → Результат: 49 */

/* 
            запускать js с помощью node dist/*.js
*/
console.log("task#1");

abstract class AnyShape {
  abstract calculateArea(): any;
}

class Rectangle extends AnyShape {
  length: number;
  height: number;
  constructor(l: number, h: number) {
    super();
    this.length = l;
    this.height = h;
  }
  calculateArea() {
    return this.length * this.height;
  }
}
const rect = new Rectangle(5, 4);
console.log(rect);

/* 3. Создайте интерфейс iAccount со следующими методами:
• balance: хранит цисловое значение баланса света
• getBalance(): возвращает текущий баланс счета
• deposit(amount: number): пополняет счет на указанную сумму
• withdraw(amount: number): снимает указанную сумму со счета
Реализуйте класс Account, который имплементирует интерфейс iAccount. Реализуйте все методы
интерфейса. Перед снятием withdraw проверяйте, достаточно ли средств на счете. Если средств
недостаточно, выбрасывайте ошибку. */
console.log("task#3");

interface iAccount {
  balance: number;
  getBalance(): number;
  deposit(amount: number): number;
  withdraw(amount: number): number;
}

class Account implements iAccount {
  balance: number = 500;
  getBalance(): number {
    console.log(this.balance);
    return this.balance;
  }
  deposit(amount: number): number {
    this.balance = this.balance + amount;
    return this.balance;
  }
  withdraw(amount: number): number {
    try {
      if (this.balance < amount) throw new Error("недостаточно средств");
      this.balance = this.balance - amount;
      return this.balance;
    } catch (error) {
      return error.message;
    }
  }
}
const account = new Account();
const account_balance = account.getBalance();
console.log(account_balance);
const withdraw = account.deposit(100);
console.log(withdraw);
console.log(account.withdraw(200));
console.log(account.withdraw(1200));

/* 4. Создайте абстрактный класс "Транспортное средство" (Vehicle), в котором будут два абстрактных
метода: "завести" (start) и "остановить" (stop). Реализуйте два класса-наследника — "Автомобиль"
(Car) и "Мотоцикл" (Motorcycle). Эти классы должны расширять класс "Транспортное средство" и
реализовать методы "завести" и "остановить", чтобы они соответствовали поведению этих
транспортных средств (например, через console.log).
Входные:
let car = new Car();
car.start();
→ Результат: Car started
Входные:
let car = new Car();
car.stop();
→ Результат: Car stopped
Входные:
let motorcycle = new Motorcycle();
motorcycle.start();
→ Результат: Motorcycle started
Входные:
let motorcycle = new Motorcycle();
motorcycle.stop();
→ Результат: Motorcycle stopped
 */

abstract class Vehicle {
  abstract start(): any;
  abstract stop(): any;
}

class Motorcycle extends Vehicle {
  start(): void {
    console.log("ЗАПУСК мотоцикла!");
  }
  stop(): void {
    console.log("Остановка мотоцикла");
  }
}
class Car extends Vehicle {
  start(): void {
    console.log("ЗАПУСК автомобиля!");
  }
  stop(): void {
    console.log("Остановка автомобиля");
  }
}

const moto = new Motorcycle();
moto.start();
moto.stop();

const auto = new Car();
auto.start();
auto.stop();

/* 5. Создайте абстрактный класс Fruit (Фрукт) со следующим полем:
• fruits: массив объектов, где каждый объект имеет свойства id, title
(название) и price (цена)
Затем создайте дочерний класс Apple (Яблоко), который наследует
Fruit. В классе Apple реализуйте метод getAppleInfo(), который должен
возвращать информацию о яблоке из массива fruits, где title равно
"яблоко" */
/* Входные: [ {"id": 1, "title": "яблоко", "price": 50}, {"id": 2, "title": "банан", "price": 30}, {"id": 3, "title": "груша", "price":
45} ]
→ Результат: {"id": 1, "title": "яблоко", "price": 50}
Входные: [ {"id": 1, "title": "банан", "price": 35}, {"id": 2, "title": "киви", "price": 70}} ] → Результат: null */

interface iFruit {
    id:number;
    title:string;
    price:string;
}

abstract class Fruit {
  fruits:iFruit[] = [{ id: 1, title: "orange", price: "100" }, { id: 2, title: "apple", price: "200" }, { id: 3, title: "pine", price: "350" }];
}

class Apple extends Fruit{
    getAppleInfo(){
        const apple = this.fruits.filter((el)=>el.title=="apple");
        return apple;
    }
}
 const apple = new Apple();
 console.log(apple.getAppleInfo());
 