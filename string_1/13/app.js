/*
Пользователь вводит четырехзначное число. Напишите скрипт, который будет
выявлять является ли каждое составляющее числа четным либо нечетным.
Добавить проверку на ввод только чисел
1234 -> 1 – неч 2 – чет 3 – неч 4 - чет
*/

let a = prompt("Enter 4-bit number");

if (isNaN(a)) {
  console.log("error");
} else {
  a = +a;
  let x1 = Math.floor(a/1000);
  console.log(`${x1} => ${x1%2 == 0}`);

  let x2 = Math.floor((a-x1*1000)/100);
  console.log(`${x2} => ${x2%2 == 0}`);

  let x3 = Math.floor((a-x1*1000-x2*100)/10);
  console.log(`${x3} => ${x3%2 == 0}`);

  let x4 = Math.floor((a-x1*1000-x2*100-x3*10)/1);
  console.log(`${x4} => ${x4%2 == 0}`);

  console.log(
    (Boolean(x1%2==0))+
    (Boolean(x2%2==0))+
    (Boolean(x3%2==0))+
    (Boolean(x4%2==0))
    );
}
