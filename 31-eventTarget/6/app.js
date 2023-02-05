/*
На вход подается строка в виде электронной почты. Если строка содержит “@” и
оканчивается на .com, .ru, то вывести true, иначе false

*/

let str = 'aaa@mail.ru';

if( (str.includes('.ru') || str.includes('.com')) && str.includes('@') ){
    console.log(true);
} else {
    console.log(false);
}