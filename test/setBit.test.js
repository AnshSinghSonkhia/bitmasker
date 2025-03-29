const setBit = require('../src/setBit');

test('sets the bit at position 1 of 0b0000 (0) to get 0b0010 (2)', () => {
    expect(setBit(0, 1)).toBe(2);
});

test('sets the bit at position 3 of 0b0000 (0) to get 0b1000 (8)', () => {
    expect(setBit(0, 3)).toBe(8);
});

test('keeps the bit at position 2 set in 0b0100 (4)', () => {
    expect(setBit(4, 2)).toBe(4);
});
