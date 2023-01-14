/*
9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
только числа. Вторая для получения только четных элементов массива. Если
результат функции проверки – true, то вызывать новую функцию, возвращающую
массив с четными элементами массива
*/

let arr = [];
const doArray = (a) => {
  let l = +prompt("Введите размер массива...");

  for (let i = 0; i < l; i++) {
    const element = prompt("введите элемент массива...");
    a.push(element);
  }
  console.log(`Вы ввели массив [${a}]`);
  let rez = [];
  if (check(arr) == true) {
    a.forEach((element) => {
      if (element % 2 == 0) {
        rez.push(element);
      }
      
    });
    console.log(`это массив только с четными числами...[${rez}]`);
  } else {
    console.log("в массиве есть строки!!");
  }

  return rez;
};

const check = (c) => {
  return c.every(function (elem) {
    return !isNaN(elem);
  });
};

doArray(arr);
