/* Напишите функцию chunkArray(array: any[], size: number): any[][], которая
принимает массив и число size, и возвращает новый массив, разделенный на
подмассивы указанного размера. */

function chunkArray(array: any[], size: number): any[][] {
    try {
        const bigArr: string[][] = [];
        let lilArr: string[] = [];

        for (let i = 0; i < array.length; i++) {
            lilArr.push(array[i]);
            if (lilArr.length === size || i === array.length - 1) {
                bigArr.push(lilArr);
                lilArr = [];
            }
        }
        console.log(bigArr);
        return bigArr;
    } catch (err: any) {
        return err.message;
    }

}


describe('test5', () => {
    test('success', () => {
        const size = 2
        expect(chunkArray([1, 2, 3, 4, 5, 6], size)).toEqual([[1, 2], [3, 4], [5, 6]])
    })
})
