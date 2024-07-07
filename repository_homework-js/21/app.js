/*
21. Напишите функцию, которая принимает два числа и возвращает наибольшее общее
делимое этих чисел.
*/
function foo(a, b) {

    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    
    return a;
  }

  const num1 = 24;
  const num2 = 36;
  const result = foo(num1, num2);
  console.log(result);
