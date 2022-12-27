/*
 На вход программе подается строка. Напишите программу, которая меняет
регистр символов, другими словами замените все строчные символы заглавными
и наоборот.
Swap Case => sWAP cASE
*/

const str = "Swap Case";

let finalString = "";
for (let i = 0; i <str.length; i++){
    if(str[i]===str[i].toUpperCase()){
        finalString += str[i].toLowerCase();
    } else {
        
    }
}

