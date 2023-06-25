let array = [
    { "id": 1, "name": "Yesenia", "age": 22 },
    { "id": 2, "name": "Hanna", "age": 22 },
    { "id": 3, "name": "Stanislau", "age": 25 },
    { "id": 4, "name": "German", "age": 18 },
    { "id": 5, "name": "Maria", "age": 27 }
]

function getAllData(){
    return array;
}

function getDataByID(id){
    let filtered = array.filter(el=>el.id == id);
    try {
        if(filtered.length<1) throw new Error('нет элемента с таким id')
    } catch (error) {
        return error.message;
    }
    return filtered;
}

function insertData(el){
    array.push({id:array.length, ...el});
    return array;
}

module.exports = {getAllData, getDataByID, insertData};