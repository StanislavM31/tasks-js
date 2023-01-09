/*
8. На входе статичный объект. Необходимо посчитать количество пар (ключ:
значение)

*/

let count = 0;
const obj = {
    1: "one",
    2: "",
    3: null,
    key4: "test",
    5: 17,
    6: 20,
  };

  for (let k in obj){
    count+=1;
  }

  console.log(count);