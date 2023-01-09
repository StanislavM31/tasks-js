/* На входе статичный объект. Необходимо вывести все числовые ключи */

let obj  = {
    1:test,
    2:10,
    key3:100,
    key4: 120,
    5: 'digit',
}

for(let key in obj ){
    if(!isNaN(key)){
        console.log(key);
    }
}