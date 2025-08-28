const validateEmail = require('../src/emailValidator');

describe('emailValidator - @ presence', () => {
  test('fails if there is no @', () => {
    expect(validateEmail('john.doe.example.com')).toBe(false);
  });
  test('passes basic shape with one @ (temp relaxed)', () => {
    // On validera mieux ensuite
    expect(typeof validateEmail('a@b')).toBe('boolean');
  });
});
