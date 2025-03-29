module.exports = function highestSetBit(num) {
    if (num === 0) return -1;
    let pos = 0;
    while (num > 0) {
        pos++;
        num >>= 1;
    }
    return pos - 1;
};
