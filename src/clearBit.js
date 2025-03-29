module.exports = function clearBit(num, pos) {
    return num & ~(1 << pos);
};
