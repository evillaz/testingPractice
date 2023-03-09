import { capitalize } from "./task4";

describe('capitalize', () => {
  test('returns string with the first character capitalized', () => {
    expect(capitalize("return").charAt(0).match(/[A-Z]/));
  })
});
 
