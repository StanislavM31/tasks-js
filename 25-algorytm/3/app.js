/*
3. Вычислите сумму массива целых чисел статичного массива используя рекурсию
*/
const arr = [1,2,3,4,5,6,7,8,9,10];
let i=0;
let x = arr[i];
let c = 0;
function count() {

    if(i > 9){
        return c;
    } else {
        c+=arr[i];
        i++;
        return count()
    }
}

let a = count(arr);
console.log(a);
