const hammingWeight = require('../src/hammingWeight');

test('Hamming weight of 5 (101)', () => {
    expect(hammingWeight(5)).toBe(2);
});

test('Hamming weight of 255 (11111111)', () => {
    expect(hammingWeight(255)).toBe(8);
});
