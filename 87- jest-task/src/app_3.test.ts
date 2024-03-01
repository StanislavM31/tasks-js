/* Напишите функцию capitalizeString(str: string): string, которая принимает строку и
возвращает новую строку, в которой каждое слово начинается с заглавной буквы. */
function capitalizeString(str: any) {

    try {
        if (!str) throw new Error('string not defined');
        if (!isNaN(str)) throw new Error('string was expected')
        let newArr = str.split(' ')
        let newStr: string[] = []
        for (let i = 0; i < newArr.length; i++) {
            newStr.push(newArr[i][0].toUpperCase() + newArr[i].slice(1))
        }
        return newStr.join(' ')
    } catch (err: any) {
        return (err.message)
    }
}



describe('test3', () => {
    test('true', ()=>{
        let result = capitalizeString('good morning')
        console.log(result)
        expect(result).toBe('Good Morning')
    })
})
