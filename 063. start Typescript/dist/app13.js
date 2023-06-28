/*
13. Создайте переменную sentence и присвойте ей строковое значение
предложения. Напишите программу, которая преобразует первую букву каждого
слова в предложении в верхний регистр. Например, для предложения "hello
world" результатом должна быть строка "Hello World"
*/
let sentence13 = "lorem ipsum is placeholder text";
let result13 = "";
result13 += sentence13[0].toUpperCase();
for (let i = 1; i < sentence13.length; i++) {
    if (sentence13[i + 1] == ' ' || sentence13[i + 1] == undefined) {
        result13 += sentence13[i].toUpperCase();
    }
    else {
        result13 += sentence13[i];
    }
}
console.log(result13);
