/* Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
и возвращает true, если оно является палиндромом (читается одинаково слева
направо и справа налево), и false в противном случае */

function isPalindrome(word: any) {
    try {
        if (!word) throw new Error('cannot find the string')
        if (!isNaN(word)) throw new Error('it is num')
        let newWord = word.split('').reverse().join('')
        return word === newWord ? true : false
    } catch (err: any) {
        return err.message
    }

}

console.log(isPalindrome('hi'))

describe('test1', () => {
    test('false', () => {
        const result = isPalindrome('hi')
        expect(result).toBeFalsy()
    })
    test('true', () => {
        const result = isPalindrome('hiih')
        expect(result).toBeTruthy()
    })

    test('length', ()=> {
        expect(isPalindrome('')).toBe('cannot find the string')
    })

    test('nun', ()=> {
        expect(isPalindrome(653)).toBe('it is num')
    })
})