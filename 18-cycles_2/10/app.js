/*
10. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите только уникальные

 */

let arr = [17, 2,,42, 42, 2, 2, ,15, 42, 2, 3, 17, 4, 4, 5, 1].sort((a,b)=> a-b);
/* 1,5 */
let rez = [];

console.log(arr);


for (let i = 0; i < arr.length; i++) {

  if(arr[i]!==arr[i+1] && arr[i]!==arr[i-1]){
    console.log(arr[i]);
    rez.push(arr[i]);
  }
}

console.log(rez);
