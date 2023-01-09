/*
3. На входе статичный объект. Необходимо вывести все числовые значения.
*/

let a  = {
    1:"test",
    2:"10",
    key3:100,
    key4: 120,
    5: 'digit',
}

for(let key in a){
    if(isNaN(a[key])){
        console.log(a[key]);
    }
}