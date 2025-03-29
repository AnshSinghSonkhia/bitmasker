const bitwiseDifference = require('../src/bitwiseDifference');

test('Bitwise XOR of 5 and 3', () => {
    expect(bitwiseDifference(5, 3)).toBe(6);
});
