/*
9. На входе статичный объект. Необходимо посчитать количество пар (ключ:
значение) где значение число и вывести количество
*/

let obj = {
  1: 100,
  2: "",
  3: null,
  key4: "test",
  5: 17,
  6: 20,
};
let count = 0;
for (let key in obj) {
  !isNaN(obj[key]) ? count++ : null;
}


console.log(count, 'свойств', '(пар ключ-значение)');