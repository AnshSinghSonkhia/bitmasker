const clearBit = require('../src/clearBit');

test('clears the bit at position 1 of 0b0010 (2) to get 0b0000 (0)', () => {
    expect(clearBit(2, 1)).toBe(0);
});

test('clears the bit at position 3 of 0b1000 (8) to get 0b0000 (0)', () => {
    expect(clearBit(8, 3)).toBe(0);
});

test('has no effect if the bit is already 0 in 0b0100 (4)', () => {
    expect(clearBit(4, 1)).toBe(4);
});
