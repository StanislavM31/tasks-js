/*
1. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide
*/

class DomHtml {
  constructor(input1, input2) {
    this.input1 = input1;
    this.input2 = input2;
    this.generateEvent();
  }
  doPlus() {
    let res = document.querySelector('.result')
    res.innerHTML = +this.input1.value + +this.input2.value;
  }
  doMinus() {}
  doMyltiply() {}
  doDivide() {}
  generateEvent() {
    let btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        this.doPlus()
    });
  }
}

let inp1 = document.querySelector(".input1");
let inp2 = document.querySelector(".input2");

let domHTML = new DomHtml(inp1, inp2);

