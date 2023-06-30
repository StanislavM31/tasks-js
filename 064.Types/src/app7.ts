/*
7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
заполняет массив. Необходимо создать массив только из чисел.
*/
/* let arr7:number[] = [];
let i:number = 5;

while(i>0){
    let temp:number = +prompt('введите значение');
    arr7.push(temp);
    i--;
}

console.log(arr7);

 */

let array7:(number|string)[] = [];
let length7:number = 5;

for (let i:number = 0; i < length7; i++) {
    const element = prompt();
    if(!isNaN(+element )){
        array7.push(+element);
    }

    console.log(array7);

}

console.log(array7);
