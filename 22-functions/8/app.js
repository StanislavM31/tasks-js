/*
8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
только числа. Вторая для получения массива с удоенными значенями каждого
элемента. Если результат функции проверки – true, то вызывать новую функцию,
возвращающую массив с удвоенными элементами
 */

let arr =[];

let size = prompt("Ведите размер массива");
for (let i = 0; i < size; i++) {
    const element = prompt('Введите элемент массива');
    arr.push(element);
}

let validArr;
let doubled = (x)=>{
    return x.map(function (elem) {
        return elem*2;
    })
}

let isValid = (a,s) => {
  let filtered = a.filter(function (elem) {
    if (!isNaN(elem)) {
      return true;
    }

  });
  if (filtered.length==s){
    return doubled(filtered);
  } else{
    return 'В массиве есть строка. не смогу удвоить element';
  }
};

console.log(isValid(arr, size));

