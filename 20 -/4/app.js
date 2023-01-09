/* Палиндром. Сравнить с развернутой строкой не используя reverse. For */

let str = prompt('enter string');
let temp = '';
for (let i=str.length-1; i>=0; i--){
    console.log(str[i]);
    temp += str[i];
    console.log(temp);
}

console.log(temp);
if(temp==str){
    console.log("Палиндром!!");
}
else{
    console.log("не палиндром");
}

switch (temp) {
    case str:
        console.log("Палиндром!!");
        break;

    default:
        console.log("не палиндром");
        break;
}