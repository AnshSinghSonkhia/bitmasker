const bitwiseIntersection = require('../src/bitwiseIntersection');

test('Bitwise AND of 5 and 3', () => {
    expect(bitwiseIntersection(5, 3)).toBe(1);
});
