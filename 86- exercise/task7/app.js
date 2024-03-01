/* Необходимо написать функцию isUnique, которая проверяет, уникальны ли все
символы в строке */

/* function isUnique(str) {

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }

        }
    }
    return true
}

console.log(isUnique('hi')) */


function isUnique(str){
    const charMap = {}

    for(let i=0; i<str.length; i++){
        let char = str[i]
        if(charMap[char]){
            return false
        } 
        charMap[char] = true
    }
    return true
}

console.log(isUnique('hello'))