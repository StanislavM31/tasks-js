/* На странице расположен маркированный список. Пользователь кликает на каждый item списка.
Необъодимо отловить на какой из элементов нажал пользователь и отобразить */

let element = document.querySelector(`.list`);

element.addEventListener('click', function(event){
    console.log(event.target);
});