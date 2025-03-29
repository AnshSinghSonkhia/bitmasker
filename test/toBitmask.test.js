const toBitmask = require('../src/toBitmask');

test('Convert array to bitmask', () => {
    expect(toBitmask(['a', 'b'], { a: 0, b: 1, c: 2 })).toBe(3);
});
