const checkBit = require('../src/checkBit');

test('returns true if bit at position 1 in 0b0010 (2) is set', () => {
    expect(checkBit(2, 1)).toBe(true);
});

test('returns false if bit at position 3 in 0b0010 (2) is not set', () => {
    expect(checkBit(2, 3)).toBe(false);
});
