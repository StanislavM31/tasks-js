/*
2. Напишите функцию, которая принимает строку в маленьком регистре и
возаращает строку, где каждое слово начинается с большого регистра
hschool company -> Hschool Company
*/

let str = prompt('введите фразу');

let foo = (a)=>{
  let rez;
  let r ="";
  rez = a.split(' ');
  console.log(rez);
  for (const i of rez) {
    let tempUpper = i[0].toUpperCase()+ i.slice(1);
    console.log(tempUpper);
    r+=tempUpper+' '
  }
  return r;
}

console.log(foo(str));
