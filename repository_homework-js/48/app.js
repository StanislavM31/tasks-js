/* 
8. Напишите функцию, которая принимает число и возвращает его факториал.

*/


function foo(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
  
    return result;
  }

  console.log(`факториал числа 3: ${foo(3)}`); 