/*
9. Реализуйте класс Сonversion, сдержащий метод do DecimalNumber, преобразующий
все числа 10 системы счисления в 2
*/

class DecimalNumber {
  toDecimal(n) {
    try {
      let result = "";
      while (n >= 1) {
        result += n % 2;
        n = n / 2;
      }
      return result;
    } catch (err) {
      alert(err.message);
    }
  }
}

let decimalNumber = new DecimalNumber();
let decimal = decimalNumber.toDecimal(8);
console.log(decimal);