const lowestSetBit = require('../src/lowestSetBit');

test('lowest set bit position in 0b1000 (8)', () => {
    expect(lowestSetBit(8)).toBe(3);
});

test('returns -1 for 0b0000 (0)', () => {
    expect(lowestSetBit(0)).toBe(-1);
});
