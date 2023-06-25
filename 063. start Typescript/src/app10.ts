/*
10. Напишите программу, которая определяет, является ли заданная строка
анаграммой (состоит из тех же символов, но в другом порядке) другой строки.
*/

let string10:string = 'hello';
let string10_anagram:string = prompt();

let result10:string[] = [];

for(let i:number=0; i<string10.length; i++){
    let temp10:string;
    temp10 = string10_anagram[i];
    if(string10.includes(temp10)){
        result10.push(temp10)
    }
}

if(string10.length == result10.length){
    console.log('it is an anagram');
} else {
    alert("not an anagram")
}

