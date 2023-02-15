/*
2. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
массив из всех элементов, а также массив из уникальных значений

*/

let input = document.querySelector("input");
let array = document.querySelector(".array");
let unique = document.querySelector(".unique");
let button = document.querySelector("button");
let arr = [];

button.addEventListener("click", function () {
  try {
    if (input.value == "") {
      throw new Error("empty value");
    }
    arr.push(input.value);
    array.innerHTML = arr;

    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        if(!uniqueArr.includes(elem)){
            uniqueArr.push(elem);
        }
    }
    unique.innerHTML = uniqueArr;
    input.value = "";
  } catch (error) {
    alert(error.message);
  }
});
