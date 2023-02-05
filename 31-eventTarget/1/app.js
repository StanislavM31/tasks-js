/* На странице расположен маркированный список. Пользователь кликает на каждый item списка.
Необъодимо отловить на какой из элементов нажал пользователь и отобразить */

let element = document.querySelector(`.list`);
function showMeElement(event) {
    console.log(event.target);
}
element.addEventListener('click', showMeElement);