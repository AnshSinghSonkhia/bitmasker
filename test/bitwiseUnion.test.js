const bitwiseUnion = require('../src/bitwiseUnion');

test('Bitwise OR of 5 and 3', () => {
    expect(bitwiseUnion(5, 3)).toBe(7);
});
