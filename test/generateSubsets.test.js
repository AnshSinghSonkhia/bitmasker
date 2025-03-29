const generateSubsets = require('../src/generateSubsets');

test('generates subsets for n = 3', () => {
    expect(generateSubsets(3)).toEqual([
        "000", "001", "010", "011", "100", "101", "110", "111"
    ]);
});
