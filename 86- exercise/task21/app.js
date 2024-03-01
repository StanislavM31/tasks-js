/* Напишите функцию longestCommonSubstring, которая принимает две строки и
возвращает наибольшую общую подстроку этих строк. */

/* function longestCommonSubstring() {
    const str1 = "apple banana pineapple orange".split(' ');
    const str2 = "banana pineapple".split(' ');
    const str = []
    let strMax = 0

    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(str2[i])) {
            str.push(str2[i]) 
           }
    }
    str.forEach(el => {
        if(el.length > strMax){
            strMax = el
        }
    })
    return strMax
}

console.log(longestCommonSubstring()) */
//'9asdfg6920'
//'5asdfg5353'