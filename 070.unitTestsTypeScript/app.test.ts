import {isPalindrome, calculateFactorial, capitalizeString, flattenArray,deleteDublicate} from './app';

describe('TestSuite_1', ()=>{
    test('Success', ()=>{
        const result = isPalindrome('NonPalyndromstring');
        expect(result).toBe(false)
    })
    test('Success', ()=>{
        const result = isPalindrome('weew');
        expect(result).toBe(true);
    })
    test('Success', ()=>{
        const result = isPalindrome(123);
        expect(result).toBe(`not a string`);
    })
})

describe('TestSuite_2', ()=>{
    test('Success', ()=>{
        const result = calculateFactorial('factorial');
        expect(result).toBe('not a number');
    })
    test('Success', ()=>{
        const result = calculateFactorial(-10);
        expect(result).toBe('нельзя найти факториал числа <0');
    })
    test('Success', ()=>{
        const result = calculateFactorial(5);
        expect(result).toBe(120);
    })
})
describe('TestSuite_3', ()=>{
    test('Success', ()=>{
        const result = capitalizeString(123);
        expect(result).toBe('передана не строка');
    })
    test('Success', ()=>{
        const result = capitalizeString("привет студент школы hs");
        expect(result).toBe('Привет Студент Школы Hs');
    })


})
describe('TestSuite_4', ()=>{
    test('Success', ()=>{
        const result = flattenArray([1,2,[3]]);
        expect(result).toEqual([1,2,3]);
    })
    test('Success', ()=>{
        const result = flattenArray([1,2,[3,4,5,[6,[7,8]]],]);
        expect(result).toEqual([1,2,3,4,5,6,7,8]);
    })
    test('Success', ()=>{
        const result = flattenArray("string");
        expect(result).toBe('not array');
    })
    test('Success', ()=>{
        const result = flattenArray([]);
        expect(result).toBe('empty array');
    })
    test('Success', ()=>{
        const result = flattenArray([1,2,3,4,5,6,7,8,9,0]);
        expect(result).toEqual([1,2,3,4,5,6,7,8,9,0]);
    })

})

describe('TestSuite_10', ()=>{
    test('Success', ()=>{
        const result = deleteDublicate('AAAABBBCCDAABBB');
        console.log(result);

        /* expect(result).toBe('ABCDAB') */
    })
})
