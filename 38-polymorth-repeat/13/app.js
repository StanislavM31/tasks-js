/*
13. (3). Реализуйте класс Calculator, который будет содержать метод doSqrt,
возвращающий корень числа принимаемого в параметрах.
*/

class Calculator{
  doSqrt(param){
    return param*param;
  }
}

let calc = new Calculator();
console.log(calc.doSqrt(5));