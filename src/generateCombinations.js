module.exports = function generateCombinations(n, k) {
    let result = [];
    for (let i = 0; i < (1 << n); i++) {
        if (i.toString(2).split('1').length - 1 === k) {
            result.push(i.toString(2).padStart(n, '0'));
        }
    }
    return result;
};
