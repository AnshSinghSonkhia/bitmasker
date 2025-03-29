const grayCode = require('../src/grayCode');

test('Gray code for 2 bits', () => {
    expect(grayCode(2)).toEqual([0, 1, 3, 2]);
});

test('Gray code for 3 bits', () => {
    expect(grayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4]);
});
