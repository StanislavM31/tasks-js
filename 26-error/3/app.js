/*
3. Дана строка массива чисел. Необходимо спарсить строку. Если же после того как
вы спарсили данные у вас не массив – бросить исключение. Добавить проверку
на числа. Далее вывести только те числа, которые кратны 3
*/

const array = JSON.parse(`"qwerty"`);

function validator(array_) {
  if (!Array.isArray(array_)) throw new Error("ЭТО НЕ МАССИВ");
  for (let i = 0; i < array_.length; i++) {
    if (isNaN(array_[i])) throw new Error("В массиве есть БУКВА!");
  }
}

function isValid(array_) {
  try {
    validator(array_);
    return array_.filter((el) => el % 3 == 0);
  } catch (error) {
    return error.message;
  }
}

let a = isValid(array);
console.log(a);
