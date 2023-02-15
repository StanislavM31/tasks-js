/*
5. На входе объект и число n, символизирующее количество пар ключ-значение.
Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
Проверить есть ли ключ 10 в объекте.
*/
let n = 15;

function doObj(n_){
    let o = {};
    for(let i=0; i<n; i++){
        o[i]=i;
    }
    return o;
}

let obj_ = doObj(n);

function check(obj){
    let arrOfKey = Object.keys(obj);
    return arrOfKey.includes('10');
}

console.log(check(obj_));