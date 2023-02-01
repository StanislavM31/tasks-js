/*
3. Реализуйте функцию, которая принимает число и возвращает объект, где ключи –
каждый единичный символ числа, значение – четность / нечетность. Добавить
проверки
542613 –> { 5: “неч”, 4: “чет”, 2: “чет”, 6: “чет”, 1: “неч”, 3: “неч” }

*/

let string = "542613";

function doOject(str) {
  try {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element % 2 == 0) {
        obj[element] = "чёт";
      } else {
        obj[element] = "нечёт";
      }
    }
  } catch (error) {
    return error.message;
  }
}
