/* На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
способы обращения к первому и последнему элементам */

let arr = ["hschool", "hschool_0", "hschool_1"];

console.log(arr[0]);
console.log(arr.forEach(function(elem, i){
    console.log(arr[i]);
}));

let a = arr.join(' ');
console.log(a.slice(0, a.indexOf(' ')));