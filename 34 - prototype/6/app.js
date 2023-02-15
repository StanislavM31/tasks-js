/*
6. На входе объект и число n, символизирующее количество пар ключ-значение.
Ключи - автоинкремент (генерируется автоматически от 1 до n). Значение каждого
ключа – рандомное число от 1 до 100. Вывести каждое значение объекта с
помощью values
*/

let n_ = 15;

function doObj(n) {
  let o = {};
  for (let i = 0; i < n; i++) {
    o[i] = Math.floor(Math.random() * 100);
  }
  return o;
}
let obj = doObj(n_);

console.log(obj);

function doArr(obj_){
    let arr = Object.values(obj_);
    arr.forEach(el=>console.log(el))
}

doArr(obj);
