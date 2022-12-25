/*
На вход программе подается строка, состоящая из имени и фамилии человека,
разделенных одним пробелом. Напишите программу, которая проверяет, что имя
и фамилия начинаются с заглавной буквы.
Chris Alan => true
chris alan => false
*/
let str = 'Hanna Pleshko';
console.log(str);

str = str.split(' ');
let flag=0;

for(let i=0; i<str.length; i++){
    if(str[i][0].toLocaleUpperCase()==str[i][0]){
        flag++;
    }
}

flag==2?console.log(true):console.log(false);;