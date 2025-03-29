const fastModularExponentiation = require('../src/fastModularExponentiation');

test('3^5 mod 7', () => {
    expect(fastModularExponentiation(3, 5, 7)).toBe(5);
});
