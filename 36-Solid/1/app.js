/*
1. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide
*/

class DomHtml {
  constructor(input1, input2) {
    this.input1 = input1;
    this.input2 = input2;
    this.generateEvent();
    this.res = document.querySelectorAll('.result');
  }
  doPlus() {
    console.log(this.res);
    this.res[0].innerHTML =  `результат сложения: ${+this.input1.value + +this.input2.value}`;
    console.log(this.res[0]);
  }
  doMinus() {
    this.res[1].innerHTML =  `результат вычитания: ${+this.input1.value - +this.input2.value}`;
    console.log(this.res[1]);
  }
  doMyltiply() {
    this.res[2].innerHTML =  `результат умножения: ${+this.input1.value * +this.input2.value}`;
    console.log(this.res[2]);
  }
  doDivide() {
    this.res[3].innerHTML =  `результат деления: ${+this.input1.value / +this.input2.value}`;
    console.log(this.res[3]);
  }
  generateEvent() {
    let btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        this.doPlus();
        this.doMinus();
        this.doMyltiply();
        this.doDivide();
    });
  }
}

let inp1 = document.querySelector(".input1");
let inp2 = document.querySelector(".input2");

let domHTML = new DomHtml(inp1, inp2);


