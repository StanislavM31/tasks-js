/*
7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
только строки. Вторая для получения суммы всех строчных элементов массива.
Если результат функции проверки – true, то вызывать новую функцию,
возвращающую конкатенацию всех строчных элементов массива

 */

let arr = [];
const doArray = a =>{
    let l = +prompt("Введите размер массива...");

    for (let i = 0; i < l; i++) {
      const element = prompt("введите элемент массива...");
      a.push(element);
    }
    if(check(a)==true){
        console.log(sum(a));
    } else {
        console.log(concat(a));
    }
}

const check = (c) => {
    return c.every(function (el) {
        console.log(isNaN(el));
    return !isNaN(el);
  });
};
const sum = s => {
    console.log('SUMMA');
    return s.reduce(function (sum, el) {
        return sum+ +el;
    },0)
}
const concat = c =>{
    console.log('CONCAT');
    let str = "";
    c.forEach(element => {
        str+=element;
    });
    return str;
}

doArray(arr);
