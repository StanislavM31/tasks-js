/* Напишите функцию checkExistsElement, реализованную в классе B Эта функция
должна принимать массив и элемент в качестве аргументов и возвращать true,
если элемент присутствует в массиве, и false в противном случае. Решите задачу,
используя разные циклы (for, for of, while, do while, forEach, some). */

/* class B {

    checkExistsElement(arr, el) {
        for (let i = 0; i < arr.length; i++) {
            if (arr.includes(el)) return true
        }
        return false
    }
}


let b = new B
console.log(b.checkExistsElement([1, 2, 3, 4], 5))
 */

/* class B {
    checkExistsElement(arr, elToCheck) {
        for (let el of arr) {
            if (el === elToCheck) return true;
        }
        return false;
    }
}

let b = new B();
console.log(b.checkExistsElement([1, 2, 3, 4], 4)); 
 */

/* class B {
    checkExistsElement(arr, elToCheck) {
        let found = false;
        arr.forEach(el => {
            if (el === elToCheck) {
                found = true;
            }
        }
        )
        return found
    }
}

let b = new B();
console.log(b.checkExistsElement([1, 2, 3, 4], 4)); // Выведет: false */

/* class B {

    checkExistsElement(arr, elToCheck) {
        return arr.some(el => el === elToCheck)
    }
}

let b = new B
console.log(b.checkExistsElement([1, 2, 3, 4], 4)) */
