/*
3. Напишите функцию, которая принимает почту и возвращает объект, вида
{
email,
active: true / false
}
true, если почта содержит @, .com / .ru. False в противном случае
}
 */

/* let e = prompt('введите email'); */
let e = "google@gmail.com";
function doObj(mail) {
  /*   let obj = {};

  obj.email = mail;
  obj.active = true;
  return obj; */
}
function emailCheck(elem) {
  let obj = {};
  if (elem.includes("@") && elem.includes(".com") || elem.includes(".ru")) {
    return (obj = {
      email: elem,
      active: true,
    });
  } else {
    return (obj = {
      email: elem,
      active: false,
    });
  }
}
/* let t = doObj(e); */

let rez = console.log(emailCheck(e));
console.log(rez);