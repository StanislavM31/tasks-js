/*
3. Вычислите сумму массива целых чисел статичного массива используя рекурсию
*/
let arr_ = [1,2,3,4,5,6,7,8,9,10,11];
let i_ = 0;
let c_ = 0;

function count(arr, i, c) {

    if(i>arr.length-1){
        return c;
    } else {
        c+=arr[i];
        console.log(c);
        i++;
        return count(arr, i, c)
    }
}

let a = count(arr_, i_, c_);
console.log(a);
