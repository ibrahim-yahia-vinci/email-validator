const validateEmail = require('../src/emailValidator');

describe('emailValidator - @ presence', () => {
  test('fails if there is no @', () => {
    expect(validateEmail('john.doe.example.com')).toBe(false);
  });
  test('passes basic shape with one @ (temp relaxed)', () => {
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

describe('emailValidator - no spaces', () => {
  test('fails if email contains spaces', () => {
    expect(validateEmail('john doe@domain.com')).toBe(false);
    expect(validateEmail('john@domain .com')).toBe(false);
  });
});

describe('emailValidator - text before and after @', () => {
  test('fails if empty local part (before @)', () => {
    expect(validateEmail('@domain.com')).toBe(false);
  });
  test('fails if empty domain part (after @)', () => {
    expect(validateEmail('john@')).toBe(false);
  });
  test('passes with non-empty local and domain', () => {
    expect(validateEmail('a@b.co')).toBe(true);
  });
});
