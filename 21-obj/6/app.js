/*
6. На входе статичный объект. Необходимо числовые значения удвоить на выходе.
*/

let obj = {
  1: "one",
  2: 100,
  3: null,
  key4: "test",
  5: 17,
  6: 20,
};
let temp = [];
for (let key in obj) {
  !isNaN(obj[key]) && typeof obj[key] == "number" ? temp.push(obj[key] * 2) : null;
}
console.log(temp);
