/*
9. Напишите код, который сделает из массива объект
[ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}
*/

interface res9 {
    name:string;
    value:number;
}

let array9:res9[] = [
    {name: 'width', value: 10},
    {name: 'height', value: 20}
 ];


let resObject = {};

for (let i = 0; i < array9.length; i++) {
    const element = array9[i];
    let temp1 = element.name;
    let temp2 = element.value;
    resObject[temp1] = temp2;



}

console.log(resObject);
