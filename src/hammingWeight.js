module.exports = function hammingWeight(num) {
    let count = 0;
    while (num) {
        count += num & 1;
        num >>= 1;
    }
    return count;
};
