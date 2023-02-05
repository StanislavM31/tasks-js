/*
Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По клику на кнопку вызвать alert и отобразить сообщение из значения инпута
*/

let btn = document.querySelector('.btn');
btn.addEventListener(`click`, function(){
  try {
    let input = document.querySelector(`input`);
    alert(input.value);
    if(input.value===``) throw new Error("пусто")
  } catch (error) {
    
  }
})