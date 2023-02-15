/*
7. На вход подается число. Необходимо каждое значение возвести в степень
индекса и вычислить сумму.
12345 = 1
0+2
1+3
2+4
3+5
4
*/
let digit = prompt('Введите число');

function doObj(str){
    let obj = {};
    for (let i=0; i<str.length; i++){
        obj[i] = str[i]*str[i];
    }
    return obj;
}
function count(o){
    let arr = Object.values(o);
    let res = 0;
    res = arr.reduce((a,b)=>{
        return a+b;
    });

    return res;
}
let obj = doObj(digit);
let r = count(obj);
console.log(r);