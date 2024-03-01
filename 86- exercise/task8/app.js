/* Напишите функцию anagrams, которая проверяет являются ли 2 переменные
анаграммами. Анаграммы – это слова, составленные из одного набора букв. */
function anagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    for (char of str2) {
        if (!str1.includes(char)) {
            return false
        }
    }

    for (char of str1) {
        if (!str2.includes(char)) {
            return false
        }
    }



    /* let resultStr = []

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1.includes(str2[j])) {
                resultStr.push(str2[j])
            }
        }
        if (resultStr.length === str1.length) {
            console.log(true)
        }
    } */

    return true
}

console.log(anagrams('race', 'care'));