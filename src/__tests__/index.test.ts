import clean = require('../index');

test('clean default', () => {
  expect(clean('sιмση ℓεcℓεяε')).toBe('sIMoN LecLeRe');
});

test('clean capitalizeFirstLetter', () => {
  expect(clean('sιмση ℓεcℓεяε', { capitalizeFirstLetter: true })).toBe('Simon leclere');
});

test('clean capitalizeAllWords', () => {
  expect(clean('sιмση ℓεcℓεяε', { capitalizeAllWords: true })).toBe('Simon Leclere');
});

test('alphabet lowercase', () => {
  expect(clean('abcdefghijklmnopqrstuvwxyz')).toBe('abcdefghijklmnopqrstuvwxyz');
});

test('alphabet uppercase', () => {
  expect(clean('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
});