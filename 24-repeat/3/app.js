/*
3. Написать функцию которая принимает массив стирок и возвращает
конкатенацию. Добавьте функцию проверки
*/
let array = ['a', 'b','c','d','e'];
let array1 = ['a', 'b',1 ,'d','e'];
function foo(arr){
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(isNaN(element)){
            string+=element;
        } else{
            alert(`${[arr[i]]} не является строкой`)
        }
    }
    return string
}

console.log(foo(array));;