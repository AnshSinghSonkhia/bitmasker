const logBase2 = require('../src/logBase2');

test('Log base 2 of 8', () => {
    expect(logBase2(8)).toBe(3);
});

test('Log base 2 of 1', () => {
    expect(logBase2(1)).toBe(0);
});
