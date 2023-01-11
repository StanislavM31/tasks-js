/*
15. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку
'-1-2-3-4-5-6-7-8-9-‘
 */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str = '';

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  str+="-"+array[i];
}

console.log(str+'-');