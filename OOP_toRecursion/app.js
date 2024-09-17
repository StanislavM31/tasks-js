/* 7. Вычислить факториал числа используя рекурсию
Входные: 4 → Результат: 24
Входные: 5 → Результат: 120
Входные: 3 → Результат: 6
 */

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

/* 8. Вычислите сумму массива чисел статичного массива используя рекурсию
Входные: [1, 2, 3, 4] → Результат: 10
Входные: [10, 20, 30] → Результат: 60 */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumArray(arr) {
  console.log(arr);
  if (arr.length) {
    return arr[0] + sumArray(arr.slice(1));
  } else {
    console.log("end");
    return 0;
  }
}

console.log(sumArray(array));

/* 9. Реализуйте поиск максимального числа статичного массива используя рекурсию
Входные: [1, 2, 3, 4] → Результат: 4
Входные: [10, 5, 8] → Результат: 10 */

let array1 = [1, 2, 3, 4, 17, 6, 7, 8, 9];

/* function theBiggest0(arr, max){
    let max = 0;
    
    if (arr.length) {
        let temp = arr[0];
        if(temp<max) {
            max = temp;
        }
        console.log("the max is: ", max);
        return theBiggest0(arr.slice(1), max);
      } else {
        console.log(arr[0]);
        return 0;
      }
}

console.log(theBiggest0(array1)); */

function test(arr) {
  if (arr.length === 0) return -Infinity;
  return Math.max(arr[0], test(arr.slice(1)));
}

console.log(test([1, 2, 3, 7, 2, 8, 1]));

function test_(arr, maxValue = -Infinity) {
  if (arr.length === 0) return maxValue;
  if (arr[0] > maxValue) maxValue = arr[0];
  return test_(arr.slice(1), maxValue);
}

console.log(test_([1, 2, 3, 7, 2, 8, 1]));

function test__(arr) {
  if (arr.length === 1) return arr[0];
  const next = test__(arr.slice(1));
  return arr[0] > next ? arr[0] : next;
}

console.log(test__([9, 1, 2, 3, 7, 2, 8, 1]));

/* 
10. На входе строка s. Проверьте, является ли строка палиндромом (читается одинаково в обе
стороны), используя рекурсию.
Входные: "madam" → Результат: True
Входные: "hello" → Результат: False
Входные: "racecar" → Результат: True
*/

function palindromeRecursion(string) {
  if(string.length<=1) return true;
  if (string[0] !== string[string.length - 1]) return false;
  return palindromeRecursion(string.slice(1, -1));
}

console.log(palindromeRecursion("madam"));
console.log(palindromeRecursion("hello"));
console.log(palindromeRecursion("racecar"));
