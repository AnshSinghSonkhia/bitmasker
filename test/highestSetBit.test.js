const highestSetBit = require('../src/highestSetBit');

test('highest set bit position in 0b1000 (8)', () => {
    expect(highestSetBit(8)).toBe(3);
});

test('returns -1 for 0b0000 (0)', () => {
    expect(highestSetBit(0)).toBe(-1);
});
