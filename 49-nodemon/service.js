const array = [
    { "id": 1, "name": "Yesenia", "age": 22 },
    { "id": 2, "name": "Hanna", "age": 22 },
    { "id": 3, "name": "Stanislau", "age": 25 },
    { "id": 4, "name": "German", "age": 18 },
    { "id": 5, "name": "Maria", "age": 27 }
]
function getAll(){
    return array;
}
function getById(id){
    let filtered = array.filter(el=>el.id==id);
    if(filtered.length>0){
        return 'по такому id нет элемента'
    } else{
        return filtered;
    }
}
function create(name, age){
    array.push({id:array.length, name:name, age:age});
    return array;
}

module.exports = { getAll, getById, create};