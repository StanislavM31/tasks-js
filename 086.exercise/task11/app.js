/* Создайте класс C, в котором будет метод mergeArrays, принимающий два массива
в качестве аргументов и возвращающий новый массив, содержащий все
элементы из обоих массивов.
 */

class C {
    mergeArrays(arr1, arr2){
        let newArr = [...arr1, ...arr2]
        return newArr
    }
}

const res = new C()
console.log(res.mergeArrays([1, 2, 3], [1, 2, 3]));