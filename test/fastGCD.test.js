const fastGCD = require('../src/fastGCD');

test('GCD of 48 and 18', () => {
    expect(fastGCD(48, 18)).toBe(6);
});

test('GCD of 101 and 103 (prime numbers)', () => {
    expect(fastGCD(101, 103)).toBe(1);
});
