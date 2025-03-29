const generateCombinations = require('../src/generateCombinations');

test('generates all 2-bit subsets for n = 4', () => {
    expect(generateCombinations(4, 2)).toEqual([
        "0011", "0101", "0110", "1001", "1010", "1100"
    ]);
});
