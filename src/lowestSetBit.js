module.exports = function lowestSetBit(num) {
    if (num === 0) return -1;
    let pos = 0;
    while ((num & 1) === 0) {
        pos++;
        num >>= 1;
    }
    return pos;
};
