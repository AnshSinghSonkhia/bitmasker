const binaryString = require('../src/binaryString');

test('Binary representation of 5', () => {
    expect(binaryString(5, 4)).toBe('0101');
});
