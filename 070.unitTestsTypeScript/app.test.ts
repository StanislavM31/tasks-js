import {
    isPalindrome, calculateFactorial,
    capitalizeString, flattenArray,
    deleteDublicate, findMissingNumber,
    findPairWithSum, StringArray,
    NumberArray, PersonArray, StringManipulator
} from './app';

describe('TestSuite_1', () => {
    test('Success', () => {
        const result = isPalindrome('NonPalyndromstring');
        expect(result).toBe(false)
    })
    test('Success', () => {
        const result = isPalindrome('weew');
        expect(result).toBe(true);
    })
    test('Success', () => {
        const result = isPalindrome(123);
        expect(result).toBe(`not a string`);
    })
})

describe('TestSuite_2', () => {
    test('Success', () => {
        const result = calculateFactorial('factorial');
        expect(result).toBe('not a number');
    })
    test('Success', () => {
        const result = calculateFactorial(-10);
        expect(result).toBe('нельзя найти факториал числа <0');
    })
    test('Success', () => {
        const result = calculateFactorial(5);
        expect(result).toBe(120);
    })
})
describe('TestSuite_3', () => {
    test('Success', () => {
        const result = capitalizeString(123);
        expect(result).toBe('передана не строка');
    })
    test('Success', () => {
        const result = capitalizeString("привет студент школы hs");
        expect(result).toBe('Привет Студент Школы Hs');
    })


})
describe('TestSuite_4', () => {
    test('Success', () => {
        const result = flattenArray([1, 2, [3]]);
        expect(result).toEqual([1, 2, 3]);
    })
    test('Success', () => {
        const result = flattenArray([1, 2, [3, 4, 5, [6, [7, 8]]],]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    })
    test('Success', () => {
        const result = flattenArray("string");
        expect(result).toBe('not array');
    })
    test('Success', () => {
        const result = flattenArray([]);
        expect(result).toBe('empty array');
    })
    test('Success', () => {
        const result = flattenArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    })

})
describe('TestSuite_6', () => {
    test('Success', () => {
        const result = findMissingNumber([1, 2, 3, 5, 6, 7, 8, 9])
        expect(result).toBe(4);
    })
})
describe('TestSuite_7', () => {
    test('Success', () => {
        const result = findPairWithSum([1, 5, 2, 3, 5, 7], 10)
        expect(result).toEqual([5, 5]);
    })
    test('Success', () => {
        const result = findPairWithSum([1, 10, 9, 5, 1, 6], 15)
        expect(result).toEqual([10, 5]);
    })
    test('Success', () => {
        const result = findPairWithSum([1, 1, 1, 1, 1, 1], 3)
        expect(result).toEqual(null);
    })
})
describe('TestSuite_8', () => {
    let stringArray = new StringArray();
    test('Success', () => {
        const longest = stringArray.getLongestWord()
        expect(longest).toBe('Ezequil');
    })
    test('Succes', () => {
        const unique = stringArray.getUniqueWords()
        expect(unique).toEqual(['Hello', 'my', 'dear', 'Ezequil']);
    })
})
describe('TestSuite_9', () => {
    let numberArray = new NumberArray();
    test('Succes', () => {
        const sum = numberArray.getSum();
        expect(sum).toBe(152);
    })
    test('Succes', () => {
        const even = numberArray.getEvenNumbers();
        expect(even).toEqual([10, 20, 30]);
    })
})
describe('TestSuite_10', () => {
    test('Success', () => {
        let personArray = new PersonArray();
        const names = personArray.getNames();
        expect(names).toEqual([
            'Anna',
            'Bill',
            'Coul',
            'Gregory',
            'Sam']);
    })
    let personArray = new PersonArray();
    const adults = personArray.getAdults();
    expect(adults).toEqual([
        { name: 'Bill', age: 20 },
        { name: 'Coul', age: 40 },
        { name: 'Gregory', age: 50 },
        { name: 'Sam', age: 30 },
    ]);
    test('Success', () => {
        const average = personArray.getAverageAge();
        expect(average).toBe(30);
    })
})
describe('TestSuite_11', () => {
    let stringManipulator = new StringManipulator();
    test('Success', () => {
        const result = stringManipulator.getCharacterCount();
        expect(result).toBe(13);
    })
    test('Success', () => {
        const result = stringManipulator.getReversedText();
        expect(result).toBe('incididunt tempor eiusmod do sed elit, adipiscing consectetur amet, sit dolor ipsum Lorem');
    })
    test('Success', () => {
        const result = stringManipulator.getWords()
        expect(result).toEqual(['Lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipiscing', 'elit,', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt']);
    })
})
describe('TestSuite_12', () => {
    test('Success', () => {
        const result = deleteDublicate('AAAABBBCCDAABBB');
        expect(result).toBe('ABCDAB');
    })
})
