const popCountParallel = require('../src/popCountParallel');

test('Population count of 5 (101)', () => {
    expect(popCountParallel(5)).toBe(2);
});

test('Population count of 15 (1111)', () => {
    expect(popCountParallel(15)).toBe(4);
});
