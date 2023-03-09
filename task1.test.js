import { stringLength } from './task1.js/';

describe('stringLength', () => {
  test('returns the length of the string', () => {
    expect(stringLength('hello')).toBe(5);
  });

  test('throws an error if the string is empty', () => {
    expect(() => {
      stringLength('');
    }).toThrow('String must be at least 1 character long');
  });

  test('throws an error if the string is too long', () => {
    expect(() => {
      stringLength('This is a really long string');
    }).toThrow('String must be no longer than 10 characters');
  });
});