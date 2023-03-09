import { reverseString } from './task2.js/';

describe('reverseString', () => {
  test('returns the reversed string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});