/*
12. Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
противном случае false
anna -> true
мем -> true
тест -> false
*/

let a = prompt("Введите слово - проверим на палиндром: ");
console.log(
  "пример: ",
  "ротор",
  "топот",
  "мем",
  "anna",
  "civic",
  "madam",
  "mom",
  "dad"
);

if (isNaN(a)) {
  a = a.split("");
  for (let i = 0, j = a.length - 1; i < a.length, j !== -1; i++, j--) {
    if (a[i] === a[j]) {
      console.log(a[i], "=", a[j]);
    } else {
      console.log("не палиндром");
      break;
    }
  }
} else {
    console.log("ввели НЕ слово");
}
console.log(`слово '${a.join("")}' - палиндром`);

