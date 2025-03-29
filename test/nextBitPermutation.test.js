const nextBitPermutation = require('../src/nextBitPermutation');

test('next bit permutation of 0b0110 (6)', () => {
    expect(nextBitPermutation(6)).toBe(9); // 0b1001
});

test('next bit permutation of 0b1000 (8)', () => {
    expect(nextBitPermutation(8)).toBe(16); // 0b10000
});

test('next bit permutation of 0b1100 (12)', () => {
    expect(nextBitPermutation(12)).toBe(17); // 0b10001
});

test('next bit permutation of 0b1010 (10)', () => {
    expect(nextBitPermutation(10)).toBe(12); // 0b1100
});
