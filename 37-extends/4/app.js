/* 4. Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
равна 5. Вывести массив в консоль (цикл for, while) */
let array1 = [];
let array2 = [];


let i = 0;

while (array1.length !== 5) {
  array1.push(i);
  i++;
}

console.log(array1);

for (let i =0; i<20; i++){
/* for (let i =0; ; i++){ */
    while (array2.length!==5) {
        array2.push(i);
        console.log(i);
    }
    if(i>20)
        break;

}

console.log(array2);