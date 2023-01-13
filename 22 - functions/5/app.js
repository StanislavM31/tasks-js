/*
5. На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
Вторая для нахождения количества элементов массива
*/
let arr = [];
let size = prompt("Ведите размер массива");

let doArr = (d, s) => {

  for (let i = 0; i < size; i++) {
    const element = prompt('Введите элемент массива');
    d.push(element);
  }
  console.log(d);
  return d;
}

let getLength = (a) =>{
  return a.length;
}

console.log( getLength(doArr(arr, size)));