/*
По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за границы кнопки сновка скрывать
*/
let element = document.querySelector("button");

element.addEventListener("mouseout", function () {
  let paragraph = document.querySelector("body>*");
  let removeNode = document.querySelectorAll('p')[0];
  paragraph.removeChild(removeNode);
});

element.addEventListener("mouseover", function () {

    let articleP = document.querySelector("body");
    let p = document.createElement("p");
  let pText = document.createTextNode("Hi");
  p.appendChild(pText);
  articleP.appendChild(p);
});
