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
let poly = 0;
let polyset = a.length;

if (isNaN(a)) {
  a = a.split("");
  for (let i = 0, j = a.length - 1; i < a.length, j !== -1; i++, j--) {
    if (a[i] === a[j]) {
      console.log(a[i], "=", a[j]);
      poly++;
      console.log(poly);
    } else {
      poly--;
    }
  }
  if (poly == polyset) {
    console.log(`слово '${a.join("")}' - палиндром`);
  } else {
    console.log("не палиндром");
  }
} else {
  console.log("ввели НЕ слово");
}