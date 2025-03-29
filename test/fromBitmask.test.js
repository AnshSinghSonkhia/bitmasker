const fromBitmask = require('../src/fromBitmask');

test('Convert bitmask to array', () => {
    expect(fromBitmask(3, { a: 0, b: 1, c: 2 })).toEqual(['a', 'b']);
});
