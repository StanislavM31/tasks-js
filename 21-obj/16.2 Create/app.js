/*
[
{ "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
{ "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
{ "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
{ "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
{ "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
]
*/
let array = [
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
/* На входе объект вида
{ "label": "Test", "category": "test", "priority": 1 },
Неоходимо запушить в БД объект только в том случае, если нет совпадений по
label.
Если совпадения нет, то в объект клиента добавить ключ id со значением label в
toLowerCase таким образом, чтобы в БД был запушен объект вида
{"id": "test" "label": "Test", "category": "test", "priority": 1 },
Если совпадение есть – ошибка  */

let o = { id: "test", label: "Test", category: "test", priority: 1 };

let check = (obj,arr) => arr.some(function (elem) {
    if(elem.label!==obj.label){
        console.log('такого label не существует. Он нам нужен');
        arr.push(obj);
    } else{
        console.log('такой label уже есть. Не push-им');
    }
    return arr;
})


console.log(check(o, array));
console.log(array);

