/*
8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
только числа. Вторая для получения массива с удоенными значенями каждого
элемента. Если результат функции проверки – true, то вызывать новую функцию,
возвращающую массив с удвоенными элементами
 */

let arr = [1, 2, 3, 4, 5, "string"];
let validArr;
let doubled = (x)=>{
    return x.map(function (elem) {
        return elem*2;
    })
}

let isValid = (a) => {
  let filtered = a.filter(function (elem) {
    if (!isNaN(elem)) {
      return true;
    }

  });
  if (filtered.length>0){
    return doubled(filtered);
  } else{
    return 'В массиве есть строка';
  }
};

console.log(isValid(arr));

