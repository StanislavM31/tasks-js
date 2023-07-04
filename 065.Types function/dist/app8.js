/*
8. У вас есть массив строковых значений почт. Необходимо вывести значения
массива без дубликатов. Добавить проверки на тип данных, почту
*/
let arrayOfEmail = [
    "aaa@mail.ru",
    "aaa@mail.ru",
    "bbb@gmail.com",
    "bbb@gmail.com",
    "ccc@mail.ru",
    "ccc@mail.ru",
    "qwert@mail.ru",
    "englessons@hotmail.com",
    "abc@gmailcom",
    "123",
    777,
    "1234567890",
];
/* function checkTypes(array:(string|number)[]):Array<result8> {
    let object:result8[];
    let res:result8;
    for (let i = 0; i < array.length; i++) {
        const element:(string|number) = array[i];

        console.log(res);

    }
    return object;
} */
function filter(array) {
    let result = [];
    array.filter(el => {
        if (typeof el == "string") {
            if (isNaN(+el)) {
                if (/^[a-z\._\-]+@[a-z]+\.[a-z]{1,5}$/gm.test(el)) {
                    if (!result.includes(el)) {
                        result.push(el);
                    }
                }
            }
        }
    });
    return result;
}
console.log(filter(arrayOfEmail));
