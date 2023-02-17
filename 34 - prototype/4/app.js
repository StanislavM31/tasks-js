/*
По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
CamelCase (примерСтрокиВCamelCase
*/

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let camel = document.createElement("p");
let div = document.querySelector('div');

btn.addEventListener("click", function () {
  let temp = inp.value.split(" ");
  let res = [];
  for (el of temp) {
    let t = el[0].toUpperCase();
    let cutWord = el.slice(1, el.length);
    let tc = t+cutWord;
    res.push(tc);
  }
  camel.innerHTML = res.join('');
  div.appendChild(camel);
});

