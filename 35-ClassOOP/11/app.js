/*
10. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите только уникальные

 */

let arr = [1, 2,2,2,42, 2, 3, 17, 4, 100, 4, 5].sort((a,b)=> a-b);
/* 1,5 */
let rez = [];

console.log(arr);


for (let i = 0; i < arr.length; i++) {

  if(arr[i]!==arr[i+1] && arr[i]!==arr[i-1]){
    rez.push(arr[i]);
  }
}

console.log(rez);
