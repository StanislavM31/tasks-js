/*
Вы вводите строку. Проверить является ли это слово палиндром. Добавить проверки
*/

let a = document.querySelector("input");
let b = document.querySelector(".res");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  a = a.value.split("");

  let t = a.reverse();
  if(a==t){
    (b.textContent = "это ПАЛИНДРОМ");
  } else{
      (b.textContent = "это НЕ ПАЛИНДРОМ");
  }
});
