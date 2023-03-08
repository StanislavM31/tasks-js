/*
9(3). Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
распознать по какому из значений контейнера производится событие клика. Если
клик происходит, то удалить данное значение из массива в div
*/

let container = document.querySelector('.container');
let btn = document.querySelector('button');
let elem;
btn.addEventListener('click', function(){
    let arr = [];
    for (let i = 0; i < 15; i++) {
        const element = Math.round(Math.random()*100);;
        arr.push(element);
    }
    container.innerHTML = arr;
    showElements(arr);
})
container.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
})

function showElements(array){
    document.querySelector('div').innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const element = document.createElement('p');
        element.innerHTML = array[i];
        document.querySelector('container').appendChild('element');
    }
}