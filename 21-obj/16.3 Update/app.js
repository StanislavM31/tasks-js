/*
16. На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
проитерировать значения объекта и сформировать на основе этих чисел массив
[
{ "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
{ "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
{ "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
{ "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
{ "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
]
*/

const array_of_objects = [
    { id: "javascript",
     label: "JavaScript",
     category: "programmingLanguages",
     priority: 1
    },
    { id: "typescript",
     label: "TypeScript",
     category: "programmingLanguages",
     priority: 1
    },
    { id: "sql",
     label: "SQL",
     category: "programmingLanguages",
     priority: 2
    },
    { id: "java",
     label: "Java",
     category: "programmingLanguages",
     priority: 3
    },
    { id: "go",
     label: "GO",
     category: "programmingLanguages",
     priority: 3
    }
];

/* 3. Update
На входе объект вида
{"id" , "test" , "label": "Test", "category": "test", "priority": 1 },
Необходимо найти id клиента в массиве БД.
Если совпадение есть, произвести обновление значений для соответствующих
ключей.
Примечание: для удаления объекта в БД можно отфильтровать объект БД не
включая id клиента. В результативный массив запушить клиентский, тем самым
обновить объект БД
Если совпадения по id нет – ошибка  */
console.log(array_of_objects);
let testObj = {
  id: "javascript",
  label: "Test",
  category: "test",
  priority: 1,
};

let upDate = (arr, obj) => {
  //надо ли по цепочке передавать?
  arr.some((element) => {
    let filtered;

    if (element.id == obj.id) {
      console.log("совпадение!");
       filtered = arr.filter(el => {
        if(el.id!==obj.id){
            return true;
        }
      });
    } else {
      console.log("нет совпадения");
    }
    console.log('после фильтрации',filtered);
    filtered.push(obj);
    console.log('фильтрованый массив после push>');
    console.log(filtered);
    return filtered;
  });
};

/* if (upDate(array_of_objects, testObj) == true) {
  console.log("вошел в ветку фильтрации");
  console.log(filter(array_of_objects, testObj));
  ;
} */
/* for (const element of array_of_objects) {

    console.log(key);
} */
upDate(array_of_objects, testObj);

const filter = array_of_objects.filter( el => el.id !== testObj.id);
console.log('=?',filter.length == array_of_objects.length);
filter.push(testObj);
console.log(filter);

const obj1 = {
  key: 10,
  func: function(el) {
    return this.key;
  }
}
function test(params) {
  console.log(this);
}
let value;
console.log( value = test.call(obj1));