/* Напишите функцию calculateFactorial(n: number): number, которая принимает
число n и возвращает его факториал. */

function calculateFactorial(n: number): number {
    try {
        if (n < 0) throw new Error("not found");

        let factorial = 1;

        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    } catch (err: any) {
        return err.message;
    }

}



describe('test2', () => {
    test('true', () => {
        let result = calculateFactorial(5)
        expect(result).toBeTruthy()
    })

    test('NaN', () => {
        expect(calculateFactorial(-2)).toBe('not found')
    })
}) 