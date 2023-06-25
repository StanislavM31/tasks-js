const array = [
    { "id": 1, "name": "Yesenia", "age": 22 },
    { "id": 2, "name": "Hanna", "age": 22 },
    { "id": 3, "name": "Stanislau", "age": 25 },
    { "id": 4, "name": "German", "age": 18 },
    { "id": 5, "name": "Maria", "age": 27 }
]
let numbers = [1,2,3,4,5,6,7,8,9,0];

function getAll(){
    return array;
}
function getById(id){
    let filtered = array.filter(el=>el.id==id);
    if(filtered.length<1){
        return 'по такому id нет элемента'
    } else{
        return filtered;
    }
}
function create(name, age){
    array.push({id:array.length, name:name, age:age});
    return array;
}

function getNumbers(){
    return numbers;
}

module.exports = { getAll, getById, create, getNumbers};