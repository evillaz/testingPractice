import Calculator from './task3.js/';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
      expect(calculator.add(2, -3)).toBe(-1);
    });

    test('adds two negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });
});
