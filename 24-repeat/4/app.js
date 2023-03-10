/* 4. Напишите функцию, которая принимает массив чисел и находит максимальное
значение
 */
let arr = [];
for (let i = 0; i < 5; i++) {
    let element = Math.floor(Math.random()*100);
    arr.push(element);
}
console.log(arr);

function foo(array){
    let big=0;
    for (let i = 0; i < array.length; i++) {
        if(big<arr[i]){
            big=arr[i];
        }
    }
    console.log(big);
}

foo(arr);