const toggleBit = require('../src/toggleBit');

test('toggles the bit at position 1 of 0b0010 (2) to get 0b0000 (0)', () => {
    expect(toggleBit(2, 1)).toBe(0);
});

test('toggles the bit at position 3 of 0b1000 (8) to get 0b0000 (0)', () => {
    expect(toggleBit(8, 3)).toBe(0);
});

test('toggles the bit at position 0 of 0b0000 (0) to get 0b0001 (1)', () => {
    expect(toggleBit(0, 0)).toBe(1);
});
