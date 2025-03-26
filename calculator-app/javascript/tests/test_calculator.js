const calculator = require('../calculator');

describe('Calculator', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test('subtracts 5 - 2 to equal 3', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    });

    test('multiplies 3 * 4 to equal 12', () => {
        expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('divides 10 / 2 to equal 5', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divides by zero', () => {
        expect(() => {
            calculator.divide(10, 0);
        }).toThrow('Cannot divide by zero');
    });
});