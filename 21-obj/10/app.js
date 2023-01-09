/*
10. На входе статичный объект, включающий такие ключи как name, age, birthday,
значения ключей – пустые строки. Считать данные с клавиатуры и заполнить
объект соответствующими данными. Добавить проверки на ввод

*/

let obj = {
    name: '',
    age: '',
    'b-day': '',

  };

  for (const iterator in obj) {
    let temp;
    while(){
        alert('Строка не должна быть пустой!!')

    };

  }

  for (const i in obj) {
    console.log(`${i}:${obj[i]}`);
  }
  console.log(obj);