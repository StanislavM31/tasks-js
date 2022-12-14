/*
Пользователь вводит число от 1 до 7, соответствующее дню недели. Необходимо
вывести день для введенного числа.
1 -> Понедельник
*/
const a = +prompt('введите номер дня недели');

switch (a) {
    case 1:
        console.log(`${a}-> Понедельник`);
        break;
    case 2:
        console.log(`${a}-> Вторник`);
        break;
    case 3:
        console.log(`${a}-> Среда`);
        break;
    case 4:
        console.log(`${a}-> Четверг`);
        break;
    case 5:
        console.log(`${a}-> Пятница`);
        break;
    case 6:
        console.log(`${a}-> Суббота`);
        break;
    case 7:
        console.log(`${a}-> Воскресенье`);
        break;
        default:
        console.log("некорректные данные");
        break;
}

