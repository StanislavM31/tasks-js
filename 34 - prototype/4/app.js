/*
По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
CamelCase (примерСтрокиВCamelCase
*/
let p = document.querySelector('p');

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let div = document.querySelector('div');

let camel = document.createElement("p");

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


  setTimeout(clear, 1500,inp);
  setTimeout(clear, 1000,p);
});

function clear(x){
  if(x.value){
    x.value = '';
  } else {
    div.removeChild(x);
  }
}

