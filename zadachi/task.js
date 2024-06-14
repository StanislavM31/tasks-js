
/* 1.
сократи до 1 строчки
function test() {
const arr = [1, 2, 3, 4]
const result = arr.map(function(el){
   return el ** 2
} )
return result
} */
function t(){
    return [1, 2, 3, 4].map((el)=> el**2);
    }
    console.log(t());
/* 2. распиши в declaration arr.map(el => el > 2) */

const declaration = function () {
    return [1, 2, 3, 4].map(el => el > 2);
  }
  console.log(declaration());

/* 3. каррирование. Пример на коде */

function outer(func) {
    return function(a) {
      return function(b) {
        return func(a, b);
      };
    };
  }
  
  function sum(a, b) {
    return a + b;
  }
  
  let curSum = outer(sum);
  
  console.log(curSum(1)(2));
  //ну это ерунда какая-то. практического применения такого усложнения записи пока не вижу)))

/* 4.  на входе число 5. посчитать сумму всех чисел составляющих 5. то есть от 1 до 5 с использованием рекурсии. */

function recursion(n) {
    if (n === 1) {
      return 1;
    } else {
      return n + recursion(n-1);
    }
  }
  
  let sum = recursion(5);
  console.log(sum);

/* 5. у вас есть функция. по условию задания ее можно вызывать неограниченное количество раз. ваша задача посчитать количество вызовов этой функции 
 */
 
let count = 0;

function recursiveFoo() {
  count++;
  recursiveFoo();
}
recursiveFoo();

console.log(`count: ${count}`);

/* 6. функция iife. Посчитать сумму всех четных элементов массива  */

(function() {
    let arr = [1, 2, 3, 4, 5];
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sum += arr[i];
      }
    }
  
    console.log(sum);
  })();