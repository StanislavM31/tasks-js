/*
6. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
только числа. Вторая для получения суммы всех элементов массива. Если
результат функции проверки – true, то вызывать новую функцию, возвращающую
сумму всех элементов массива
 */

let arr = [];
let l = prompt("length of arr:...");

for (let i = 0; i < l; i++) {
  arr.push(prompt("введите элемент массива"));
}

const isDigit = (a) => {
  return a.every((el) => {
     if(!isNaN(el) == true){
        return true;
     }
  });
};

const summa = s =>{
    return s.reduce((sum, elem)=>{
        return sum+ +elem;
    }, 0)
}

if(isDigit(arr)==true){
    console.log((arr));
    console.log(summa(arr));
} else{
    console.log('в массиве есть строки. Не могу сложить');
}

