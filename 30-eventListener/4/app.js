/*
Необходимо отобразить кнопку с надписью «Нажми на меня»
и пустой инпут. По клику на кнопку вызвать alert и
отобразить сообщение из значения инпута.
Проверки на ввод. Обработать ошибки

*/

let btn = document.querySelector(`.button`);
btn.addEventListener(`click`, function () {
  try {

    let inp = document.querySelector(`input`);
    if (!inp.value) {
      throw new Error("пустое сообщение");
    }
    inp.style='border:1px solid black';
    alert(inp.value);
    inp.value='';


  } catch (error) {
    let inp = document.querySelector(`input`);
    inp.style='border:1px solid red';
    alert(error.message);
  }
});
