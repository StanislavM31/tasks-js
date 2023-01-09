/*
4. На входе статичный объект. Необходимо вывести все четные значения объекта.

*/

let obj  = {
    1:"test",
    2:"10",
    key3:100,
    key4: 120,
    5: 'digit',
}

for(let key in obj){
    obj[key]%2==0?console.log(obj[key]):null;
}