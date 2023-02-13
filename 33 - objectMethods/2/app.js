/*
2. Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
проверки
*/

let obj = {
    id: 1222,
    name: `ivan`,
    age: 23,
    age: 23,
    age: 23,
    age: 1234,
}

function count(o){
    let l=0;
    for (let i in Object.entries(o)){
        l++;
    }
    return l;
}

let a = count(obj);
console.log(a);