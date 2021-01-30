import clean = require('../index');

test('clean default', () => {
  expect(clean('sιмση ℓεcℓεяε')).toBe('sIMON LecLeRe');
});

test('clean capitalizeFirstLetter', () => {
  expect(clean('sιмση ℓεcℓεяε', { capitalizeFirstLetter: true })).toBe('Simon leclere');
});

test('clean capitalizeAllWords', () => {
  expect(clean('sιмση ℓεcℓεяε', { capitalizeAllWords: true })).toBe('Simon Leclere');
});
