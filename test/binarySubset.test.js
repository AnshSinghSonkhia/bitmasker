const bitwiseSubset = require('../src/bitwiseSubset');

test('Check if 3 is a subset of 7', () => {
    expect(bitwiseSubset(3, 7)).toBe(true);
});

test('Check if 5 is a subset of 3', () => {
    expect(bitwiseSubset(5, 3)).toBe(false);
});
