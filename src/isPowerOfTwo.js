module.exports = function isPowerOfTwo(num) {
    return num > 0 && (num & (num - 1)) === 0;
};
