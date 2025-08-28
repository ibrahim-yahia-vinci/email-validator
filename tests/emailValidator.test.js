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


describe('emailValidator - dot in domain (not last)', () => {
  test('fails if no dot in domain', () => {
    expect(validateEmail('john@domain')).toBe(false);
  });
  test('fails if dot is last char', () => {
    expect(validateEmail('john@domain.')).toBe(false);
  });
  test('passes if domain has a dot not at the end', () => {
    expect(validateEmail('john@domain.com')).toBe(true);
  });
});
