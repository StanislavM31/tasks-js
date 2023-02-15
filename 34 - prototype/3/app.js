/*
3. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый
ключ – индекс элемента массива, а значение – текущее итерируемое значение
массива
[11, 2, 13] – {
0: 11,
1: 2,
2: 13
}

*/

let inputTag = document.querySelector("input");
let arrayTag = document.querySelector(".array");
let objTag = document.querySelector(".object");
let buttonTag = document.querySelector("button");
let arr = [];
let finalObject = {};

buttonTag.addEventListener('click', function(){
  try {
    if(!inputTag.value){
      throw new Error('пусто');
    }
    arr.push(inputTag.value);
    arrayTag.innerHTML = arr;
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];

      finalObject[i] = el;
    }
    console.log(finalObject);
  } catch (error) {
    alert(error.message);
  }
})