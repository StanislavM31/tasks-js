/* Реализуйте класс E с методом findIndexOfNegative, который принимает массив
чисел в качестве аргумента и возвращает индекс первого отрицательного числа в
массиве. Если отрицательных чисел нет, функция должна вернуть -1. */

class E {


    findIndexOfNegative(arr) {
        let numOfIndex = []

        arr.forEach((el, index) => {
            if (el < 0) {
                numOfIndex.push(index)
                return;
            }
            
        })

        return numOfIndex[0] 
    }
}

const res = new E()
console.log(res.findIndexOfNegative([1, -2, 3, 4, -4]))