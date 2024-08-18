/* 
9. Напишите функцию, которая принимает число и возвращает true, если число является 
простым, и false в противном случае.

*/

function foo(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(`число 7 простое? ${foo(7)}`);
  console.log(`число 12 простое? ${foo(12)}`);
  
  let obj = {
    a:1,
    b:2,
    c:3
  }


