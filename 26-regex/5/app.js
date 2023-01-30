/*
5. На вход подается число n – количество элементов массива. Необходимо
заполнить массив случайными элементами. Если значение массива находится в
диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
массива. Вторая: валидация. Третья: основная логика задачи
*/
const l = 5;
function doArray(params) {
  let array = new Array();
  for (let i = 0; i < params; i++) {
    const element = +prompt("Введите элемент");
    array.push(element);
  }
  return array;
}

function validator(params) {
  try {
    let result = params.filter((el) => {
      if (el > 10 && el < 100) {
        return true;
      }
    });
    if (result.length == 0) {
      throw new Error("нет походящих элементов el > 10 && el < 100");
    }
    return result;
  } catch (error) {
    return error.message;
  }
}

function findValidElem(sizeOfArray) {
  return validator(doArray(sizeOfArray));
}

let r = findValidElem(l);
console.log(r);
