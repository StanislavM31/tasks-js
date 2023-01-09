/*
7. На вход статичный объект. Необходимо объект проверить на пустоту. Если же
объект пустой, то выводим false, если же содержит хотя бы одну пару (ключ:
значение), то true

*/

const obj = {
  1: "one",
  2: "",
  3: null,
  key4: "test",
  5: 17,
  6: 20,
};

const obj1 = {};


let count = 0;


for (const key in obj1) {
    count+=1;
}

count>0?console.log('NOT empty'):console.log("EMPTY");;