/*
5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
необходимо получить значение из инпута. Проверить, что это число > 0. Если
проверка true, то вывести в Результат ряд Фибоначчи. Рекурсия
*/

const input = document.querySelector("input");
let button = document.querySelector("button");
let p = document.querySelector("p");
let a = 1;

function fibi(n) {  // число n передадим параметром в ф-ю


      let sum = 0
          ,i
          ,str
          ,arr = [];

      for( i=0; i<n; i++) {
          if( arr.length > 1)  sum += arr[ arr.length-2];
          if( arr.length == 1) sum = 1;
          if( arr.length == 0) sum = 0;
          arr.push( sum);
      }
      str = arr.join(", ");
      return str;
    }

button.addEventListener("click", function () {
  try {
    if (input.value == 0) {
      throw new Error("значение не должно быть 0");
    }
  } catch (error) {
    error.message;
  }

  p.innerHTML = 'Массив чисел Фибоначчи: ' + fibi(input.value);
});


