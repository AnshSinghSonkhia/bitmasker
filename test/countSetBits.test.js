const countSetBits = require('../src/countSetBits');

test('counts set bits in 0b1011 (11)', () => {
    expect(countSetBits(11)).toBe(3);
});

test('counts set bits in 0b0000 (0)', () => {
    expect(countSetBits(0)).toBe(0);
});
