/*
7. Реализуйте функцию, которая принимает число и возвращает возвенную в
квадрат каждую цифру числа соединяя их. Добавить проверки
9119 -> 811181 (9
2 === 81, 1
2=== 1)

*/
let a = "349";

function doSquare(element) {
  try {
/*     let arr = element.split("");
    let temp = arr.map((el) => el ** 2);
    return temp.join(""); */
    return element.split("").map((el) => el ** 2).join("");
  } catch (error) {
    return error.message;
  }
}

let r = doSquare(a);
console.log(r);
