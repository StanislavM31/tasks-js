/*
8(2). На странице расположен маркированный список. Пользователь кликает на
каждый item списка. Необходимо отловить на какой из элементов нажал
пользователь и отобразить в div расположенном ниже маркированного списка
*/

let selector = document.querySelector('ul');
let divTag = document.querySelector('.result');
selector.addEventListener('click',function (event) {
    console.log(event.target);
    divTag.innerHTML = event.target.innerHTML;
})