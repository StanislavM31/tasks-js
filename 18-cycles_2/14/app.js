/*
14. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235

*/

let arr = [10, 20, 30, 50, 235, 3000];
let rez = [];
let element;
for (let i = 0; i < arr.length; i++) {
  element = "" + arr[i];
  console.log(element.slice(0, 1));
  switch (element.slice(0, 1)) {
    case '1':
      rez.push(+element)
      break;
    case '2':
      rez.push(+element)
      break;
    case '5':
      rez.push(+element)
      break;

    default:
      break;
  }
}

console.log(rez);
