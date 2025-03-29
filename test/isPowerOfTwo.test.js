const isPowerOfTwo = require('../src/isPowerOfTwo');

test('checks if 8 is a power of two', () => {
    expect(isPowerOfTwo(8)).toBe(true);
});

test('checks if 10 is not a power of two', () => {
    expect(isPowerOfTwo(10)).toBe(false);
});
