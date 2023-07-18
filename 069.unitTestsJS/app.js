/*
1. Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
Добавить необходимые проверки.
Написать тест для функции
*/

function sum(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error(`не число`);
    }
    return a ** b;
  } catch (error) {
    return error.message;
  }
}
/* 2. Написать функцию которая принимает 2 числа и возвращает результат
произведения 2 множителей. Добавить необходимые проверки.
Написать тест для функции */

function multi(a, b) {
  try {
    if (typeof a == "bigint" || typeof b == "bigint")
      throw new Error(`неверный тип числа(bigInt)`);
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error(`не число`);
    return a * b;
  } catch (error) {
    return error.message;
  }
}

/*
3. Написать функцию которая принимает массив чисел и находит сумму всех
элементов. Добавить необходимые проверки.
Написать тест для функции
*/

function sumOfArray(array) {
  try {
    if (!Array.isArray(array)) throw new Error(`не массив`);
    if (!array.length) throw new Error("empty arr");
    let bool = array.every((el) => typeof el == "number");
    if (!bool) throw new Error(`массив содержит строку`);
    return array.reduce((acc, next) => acc + next, 0);
  } catch (error) {
    return error.message;
  }
}
/*
4. У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести все товары, количество которых больше 10 и произведены в Германии
Написать тест для функции
[
{ id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
{ id: 2, title: 'Смартфон', count: 33, price: 1500 , producer: 'Германия' },
{ id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
{ id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
{ id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
{ id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
{ id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
]
*/
function findProduct(array) {
  try {
    if (!Array.isArray(array)) throw new Error("not array");
    if (!array.length) throw new Error("empty array");
    const filtered = array.filter(
      (el) => el.producer == "Германия" && el.count > 10
    );
    return filtered;
  } catch (error) {
    return error.message;
  }
}

/* 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
Необходимо вывести значения массива без дубликатов. Добавить необходимые
проверки.
Написать тест для функции */

function uniqNumbers(array) {
  try {
    if (!Array.isArray(array)) throw new Error(`not an array`);
    if (!array.length) throw new Error(`Empty array`);
    const boolString = array.every((el) => typeof el == "string");
    if (boolString == false) throw new Error(`не все элементы - строки`);
    const boolRegex = array.every((el) =>
      /^\+375+[29,33,44]+[0-9]{7}/gm.test(el)
    );
    if (boolRegex == false) throw new Error(`не все элементы - phone numbers`);
    const uniq = [];
    for (const element of array) {
      if (!uniq.includes(element)) {
        uniq.push(element);
      }
    }
    return uniq;
  } catch (error) {
    return error.message;
  }
}
/* 6. На входе статичный объект. Необходимо посчитать количество пар (ключ:
значение) где значение число и вывести количество. Добавить необходимые
проверки.
Написать тест для функции
 */

function amountField(obj) {
  try {
    if (toString.call(obj) !== "[object Object]")
      throw new Error("parameter is not an object");
    const amount = Object.keys(obj);
    if (!amount.length) throw new Error(`в обьекте нет полей`);
    return amount;
  } catch (error) {
    return error.message;
  }
}
/*
7. На входе статичный объект. Необходимо числовые значения удвоить на выходе.
Написать тест для функции
 */
function doubledValues(array) {
  try {
    if (!Array.isArray(array)) throw new Error(`is not array`);
    if (!array.length) throw new Error(`empty array`);
    return array.map((el) => el * 2);
  } catch (error) {
    return error.message;
  }
}

/*
8. На входе статичный объект. Необходимо сформировать массив из всх четных
значений объекта.
Написать тест для функции
*/
function isEvenArray(array) {
  try {
    if (!Array.isArray(array)) throw new Error(`is not array`);
    if (!array.length) throw new Error(`empty array`);

    if (!array.every((el) => typeof el == "number"))
      throw new Error(`array have a string!`);
    return array.filter((el) => el % 2 == 0);
  } catch (error) {
    return error.message;
  }
}

/*
9. На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
разбить данный одномерный массив на маленькие массивы в зависимости от
того, какого число ввел пользователь. Добавить необходимые проверки.
1 -> [[1], [2], [3], [4], [5], [6]]
2 -> [[1, 2], [3, 4], [5, 6]]
3 -> [[1, 2, 3], [4, 5, 6]]
4 -> [[1, 2, 3, 4], [5, 6]
5 -> [[1, 2, 3, 4, 5], [6]]
6 -> [[1, 2, 3, 4, 5, 6]]
Написать тест для функции
*/

function devideArray(array, n) {

  if (!array.every((el) => typeof el == "number"))
    throw new Error(`array have a string!`);
  const result = [];
  let tempArr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    tempArr.push(element);
    if (tempArr.length == n || i == array.length - 1) {
      result.push(tempArr);
      console.log(tempArr);
      tempArr = [];
    }
  }
  console.log(result);
  return result;
}
module.exports = {
  sum,
  multi,
  sumOfArray,
  findProduct,
  uniqNumbers,
  amountField,
  doubledValues,
  isEvenArray,
  devideArray,
};
